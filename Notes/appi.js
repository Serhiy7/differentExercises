const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const addNoteButton = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");
const loadingIndicator = document.getElementById("loading-indicator");
const noteTitleInput = document.getElementById("note-title");
const noteBodyInput = document.getElementById("note-body");

// Отображение заметок
function displayNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach(note => {
        const li = document.createElement("li");
        li.classList.add("note");
        li.innerHTML = `
            <strong>${note.title}</strong>
            <p>${note.body}</p>
            <button onclick="editNote(${note.id})">Изменить</button>
            <button onclick="deleteNote(${note.id})">Удалить</button>
        `;
        notesList.appendChild(li);
    });
}

// Получение заметок
async function fetchNotes() {
    loadingIndicator.style.display = "block";
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const notes = await res.json();
        displayNotes(notes);
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    } finally {
        loadingIndicator.style.display = "none";
    }
}

// Добавление заметки
async function addNote() {
    const title = noteTitleInput.value.trim();
    const body = noteBodyInput.value.trim();

    if (!title || !body) {
        alert("Заполните все поля!");
        return;
    }

    loadingIndicator.style.display = "block";
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body })
        });

        const newNote = await res.json();
        console.log("Добавлено:", newNote);
        fetchNotes();
    } catch (error) {
        console.error("Ошибка при добавлении:", error);
    } finally {
        loadingIndicator.style.display = "none";
    }
}

// Изменение заметки
async function editNote(id) {
    const newTitle = prompt("Введите новый заголовок:");
    const newBody = prompt("Введите новый текст заметки:");

    if (newTitle && newBody) {
        loadingIndicator.style.display = "block";
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle, body: newBody })
            });

            if (!res.ok) throw new Error("Ошибка обновления!");

            const updatedNote = await res.json();
            console.log("Обновлено:", updatedNote);
            fetchNotes();
        } catch (error) {
            console.error("Ошибка при обновлении:", error);
        } finally {
            loadingIndicator.style.display = "none";
        }
    }
}

// Удаление заметки
async function deleteNote(id) {
    if (!confirm("Удалить заметку?")) return;

    loadingIndicator.style.display = "block";
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "DELETE" });

        if (res.ok) {
            console.log("Заметка удалена");
            fetchNotes();
        } else {
            throw new Error("Ошибка при удалении");
        }
    } catch (error) {
        console.error("Ошибка удаления:", error);
    } finally {
        loadingIndicator.style.display = "none";
    }
}

// Кнопка добавления заметки
addNoteButton.addEventListener("click", addNote);

// Загрузка заметок при старте страницы
fetchNotes();
