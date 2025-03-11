// Ключ API JSONPlaceholder (он публичный, поэтому здесь не нужен секретный ключ)
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Получаем элементы из DOM
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const loadingIndicator = document.getElementById("loading");

// Глобальный массив задач
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Функция для рендеринга задач
function renderTasks(tasksToRender) {
  taskList.innerHTML = "";
  tasksToRender.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `
      <span>
        <input type="checkbox" class="complete-btn" ${task.completed ? 'checked' : ''}>
        <strong>${task.title}</strong>
      </span>
      <span>
        <button class="edit-btn">Редактировать</button>
        <button class="delete-btn">Удалить</button>
      </span>
    `;
    taskList.appendChild(li);
    // Запускаем анимацию появления
    setTimeout(() => li.classList.add("show"), 10);
  });
}

// Функция для сохранения задач в localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Загрузка задач с сервера (GET)
async function loadTasks() {
  loadingIndicator.style.display = "block";
  try {
    const response = await fetch(`${API_URL}?_limit=5`); // Ограничим выборку, чтобы не было слишком много задач
    const data = await response.json();
    // Сохраняем полученные задачи в локальное хранилище и в глобальный массив
    tasks = data;
    saveTasks();
    renderTasks(tasks);
  } catch (error) {
    console.error("Ошибка загрузки задач:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Добавление задачи (POST)
async function addTask(title) {
  loadingIndicator.style.display = "block";
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    });
    const newTask = await response.json();
    // Поскольку JSONPlaceholder не сохраняет реальные ID, можно сгенерировать уникальный ID локально:
    newTask.id = Date.now();
    tasks.push(newTask);
    saveTasks();
    renderTasks(tasks);
  } catch (error) {
    console.error("Ошибка добавления задачи:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Редактирование задачи (PUT)
async function updateTask(taskId, newTitle, newCompleted) {
  loadingIndicator.style.display = "block";
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, completed: newCompleted })
    });
    const updatedTask = await response.json();
    // Обновляем локальную задачу
    tasks = tasks.map(task => task.id === taskId ? updatedTask : task);
    saveTasks();
    renderTasks(tasks);
  } catch (error) {
    console.error("Ошибка обновления задачи:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Удаление задачи (DELETE)
async function deleteTask(taskId) {
  if (!confirm("Вы уверены, что хотите удалить задачу?")) return;
  loadingIndicator.style.display = "block";
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      tasks = tasks.filter(task => task.id !== taskId);
      saveTasks();
      renderTasks(tasks);
    } else {
      throw new Error("Ошибка при удалении задачи");
    }
  } catch (error) {
    console.error("Ошибка удаления задачи:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Обработчик для кнопки "Добавить"
addTaskButton.addEventListener("click", () => {
  const title = taskInput.value.trim();
  if (title) {
    addTask(title);
    taskInput.value = "";
  } else {
    alert("Введите название задачи!");
  }
});

// Делегирование событий для управления задачами
taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const taskId = Number(li.dataset.id);

  // Обработка нажатия на кнопку "Удалить"
  if (e.target.classList.contains("delete-btn")) {
    deleteTask(taskId);
  }

  // Обработка нажатия на кнопку "Редактировать"
  if (e.target.classList.contains("edit-btn")) {
    const newTitle = prompt("Введите новое название задачи:", li.querySelector("strong").textContent);
    if (newTitle) {
      // Определим новое состояние checkbox
      const checkbox = li.querySelector(".complete-btn");
      const newCompleted = checkbox.checked;
      updateTask(taskId, newTitle, newCompleted);
    }
  }

  // Обработка изменения состояния чекбокса (выполнено/не выполнено)
  if (e.target.classList.contains("complete-btn")) {
    const newCompleted = e.target.checked;
    // Находим задачу по ID
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      updateTask(taskId, task.title, newCompleted);
    }
  }
});

// Загружаем задачи при загрузке страницы
loadTasks();
