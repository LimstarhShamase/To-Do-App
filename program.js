document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.querySelector('.todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        if (input.value.trim() !== "") {
            const task = document.createElement("li");
            task.classList.add("todo-list");


            const completedBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");
            completedBtn.classList.add("completed-btn");
            deleteBtn.classList.add("delete-btn");


            deleteBtn.innerText = "Delete";
            completedBtn.innerText = "Complete";
            task.innerText = input.value;
            list.appendChild(task);
            task.appendChild(completedBtn);
            task.appendChild(deleteBtn);
            input.value = "";
        }
    });
});