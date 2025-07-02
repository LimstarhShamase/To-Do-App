document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.querySelector('.todo-list');

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const text = input.value.trim();
        if (text !== "") {
            const newTask = { text: text, completed: false };
            tasks.push(newTask);
            updateLocalStorage();
            createTaskElement(newTask);
            input.value = "";
        }
    });

    function createTaskElement(taskObj) {
        const task = document.createElement("li");
        task.classList.add("todo-item");

        const taskText = document.createElement("span");
        taskText.innerText = taskObj.text;
        if (taskObj.completed) {
            taskText.style.textDecoration = "line-through";
            task.classList.add("completed");
        }

        const completedBtn = document.createElement("button");
        completedBtn.classList.add("completed-btn");
        completedBtn.innerText = taskObj.completed ? "Undo" : "Complete";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";

        task.appendChild(taskText);
        task.appendChild(completedBtn);
        task.appendChild(deleteBtn);
        list.appendChild(task);

        // Handle complete/undo
        completedBtn.addEventListener("click", () => {
            taskObj.completed = !taskObj.completed;
            taskText.style.textDecoration = taskObj.completed ? "line-through" : "none";
            completedBtn.innerText = taskObj.completed ? "Undo" : "Complete";
            updateLocalStorage();
        });

        // Handle delete
        deleteBtn.addEventListener("click", () => {
            list.removeChild(task);
            tasks = tasks.filter(t => t !== taskObj);
            updateLocalStorage();
        });
    }

    function updateLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
