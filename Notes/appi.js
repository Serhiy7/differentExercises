// Получаем элементы с DOM
const addNoteButton = document.getElementById("add-note");
const noteTitleInput = document.getElementById("note-title");
const noteBodyInput = document.getElementById("note-body");
const notesList = document.getElementById("notes-list");
const loadingIndicator = document.getElementById("loading-indicator");

// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Функция для отображения заметок
function displayNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach(note => {
        const noteItem = document.createElement("li");
        noteItem.classList.add("note");

        noteItem.innerHTML = `
            <strong>${note.title}</strong><br>
            ${note.body}
            <button onclick="editNote(${note.id})">Редактировать</button>
            <button onclick="deleteNote(${note.id})">Удалить</button>
        `;

        notesList.appendChild(noteItem);
    });
}

// Функция для получения всех заметок
async function fetchNotes() {
    try {
        loadingIndicator.style.display = "block"; // Показываем индикатор загрузки
        const res = await fetch(apiUrl);
        const data = await res.json();
        displayNotes(data);
    } catch (error) {
        console.error("Ошибка при загрузке заметок:", error);
    } finally {
        loadingIndicator.style.display = "none"; // Скрываем индикатор загрузки
    }
}

// Функция для добавления новой заметки (POST)
async function addNewNote() {
    const title = noteTitleInput.value.trim();
    const body = noteBodyInput.value.trim();

    if (title && body) {
        try {
            loadingIndicator.style.display = "block"; // Показываем индикатор загрузки

            const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body })
            });

            const newNote = await res.json();
            console.log("Заметка добавлена:", newNote);

            // После добавления заметки, перезагружаем список заметок
            fetchNotes();
        } catch (error) {
            console.error("Ошибка при добавлении заметки:", error);
        } finally {
            loadingIndicator.style.display = "none"; // Скрываем индикатор загрузки
        }
    } else {
        alert("Заполните все поля!");
    }
}

// Функция для редактирования заметки (PUT)
async function editNote(id) {
    const newTitle = prompt("Введите новый заголовок:");
    const newBody = prompt("Введите новый текст:");

    if (newTitle && newBody) {
        try {
            const res = await fetch(`${apiUrl}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle, body: newBody })
            });

            const updatedNote = await res.json();
            console.log("Заметка обновлена:", updatedNote);

            // После обновления, перезагружаем список заметок
            fetchNotes();
        } catch (error) {
            console.error("Ошибка при редактировании заметки:", error);
        }
    }
}

// Функция для удаления заметки (DELETE)
async function deleteNote(id) {
    if (confirm("Вы уверены, что хотите удалить эту заметку?")) {
        try {
            const res = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE"
            });

            if (res.status === 200) {
                console.log("Заметка удалена");

                // После удаления, перезагружаем список заметок
                fetchNotes();
            }
        } catch (error) {
            console.error("Ошибка при удалении заметки:", error);
        }
    }
}

// Обработчик события для кнопки "Добавить заметку"
addNoteButton.addEventListener("click", addNewNote);

// Загружаем заметки при загрузке страницы
fetchNotes();
