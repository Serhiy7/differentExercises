let a = ""; // Первое число
let b = ""; // Второе число
let sign = ""; // Знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];
const percent = "%";
const changeSign = "+/-";

// Экран
const out = document.querySelector(".calc-screen .display");

// Очистка всего
function clearAll() {
  a = b = sign = "";
  finish = false;
  out.textContent = 0;
}

// Обновление экрана
function updateScreen(value) {
  out.textContent = value;
}

// Логирование (для отладки)
function logState() {
  console.log({ a, b, sign });
}

// Математические операции
const operations = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "X": (x, y) => x * y,
  "/": (x, y) => (y === 0 ? "Error" : x / y),
};

// Сохранение истории
function saveToHistory(operation) {
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(operation);
  if (history.length > 5) history.shift();
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

// Отображение истории
const historyElement = document.querySelector(".calc-screen .history");

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  historyElement.innerHTML = history.map(op => `<div>${op}</div>`).join("");
}

// Обработка нажатий
document.querySelector(".buttons").onclick = (event) => {
  // Проверяем, что нажата кнопка с классом "btn" и это не кнопка "AC"
  if (!event.target.classList.contains("btn") || event.target.classList.contains("ac")) return;

  // Получаем текст нажатой кнопки
  const key = event.target.textContent;

  // Если нажата цифра или точка
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key; // Добавляем цифру к первому числу
    } else if (a !== "" && b !== "" && finish) {
      b = key; // Начинаем ввод нового числа после завершения предыдущей операции
      finish = false;
    } else {
      b += key; // Добавляем цифру ко второму числу
    }
    updateScreen(b === "" ? a : b); // Обновляем экран
    logState(); // Логируем состояние
    return;
  }

  // Если нажата математическая операция (+, -, *, /)
  if (action.includes(key)) {
    sign = key; // Сохраняем знак операции
    updateScreen(sign); // Обновляем экран
    logState(); // Логируем состояние
    return;
  }

  // Если нажата кнопка "%" (процент)
  if (key === percent && a !== "") {
    a = a / 100; // Преобразуем число в проценты
    updateScreen(a); // Обновляем экран
    return;
  }

  // Если нажата кнопка "+/-" (смена знака)
  if (key === changeSign && a !== "") {
    a = a * -1; // Меняем знак числа
    updateScreen(a); // Обновляем экран
    return;
  }

  // Если нажата кнопка "=" (вычисление)
  if (key === "=") {
    if (b === "") b = a; // Если второе число не введено, используем первое число
    const originalA = a; // Сохраняем оригинальное значение a
    const originalB = b; // Сохраняем оригинальное значение b
    const result = operations[sign]?.(+a, +b) ?? "Error"; // Вычисляем результат
    a = result; // Сохраняем результат в переменную a
    finish = true; // Устанавливаем флаг завершения операции
    updateScreen(a); // Обновляем экран

    // Сохраняем операцию в историю с оригинальными значениями
    const operation = `${originalA} ${sign} ${originalB} = ${result}`;
    saveToHistory(operation);

    // Обновляем отображение истории
    renderHistory();

    // Логируем состояние
    logState();
  }
};

// Очистка
document.querySelector(".ac").onclick = clearAll;

// Кнопка для очистки истории
const clearHistoryButton = document.createElement("button");
clearHistoryButton.textContent = "Очистить историю";
clearHistoryButton.addEventListener("click", () => {
  localStorage.removeItem("calcHistory");
  renderHistory();
});
document.body.appendChild(clearHistoryButton);

// Загружаем историю при загрузке страницы
renderHistory(); 