let a = ""; // first number
let b = ""; // second number
let sign = ""; // знак мат операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];
const percent = "%";
const changeSing = "+/-";

//Экран
const out = document.querySelector(".calc-screen div");

function clearAll() {
  a = ""; // first number
  b = ""; // second number
  sign = ""; // знак мат операции
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains("btn")) return;
  // нажата кнопка АС
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  //получаю нажатую кнопку
  const key = event.target.textContent; // считывает текст с нажатой кнопки

  // проверка если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      console.log(a, b, sign);
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);

    return;
  }

  //если нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  //Процент
  if (a !== "" && key === percent) {
    a = a / 100;
    out.textContent = a;
  }

  //Смена знака
  if (a !== "" && key === changeSing) {
    a = a * -1;
    out.textContent = a;
  }

  // Нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "False";
          a = "";
          b = "";
          sign = "";
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};
