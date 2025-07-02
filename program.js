document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.querySelector('.todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (input.value.trim() !== "") {
            const task = document.createElement("li");
            task.classList.add("todo-item");

            const taskText = document.createElement("span");
            taskText.innerText = input.value;

            const completedBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");
            completedBtn.classList.add("completed-btn");
            deleteBtn.classList.add("delete-btn");

            deleteBtn.innerText = "Delete";
            completedBtn.innerText = "Complete";

            task.appendChild(taskText);
            task.appendChild(completedBtn);
            task.appendChild(deleteBtn);
            list.appendChild(task);
            input.value = "";



            completedBtn.addEventListener("click", function(){
                task.classList.toggle("completed");
                if (task.classList.contains("completed")) {
                    completedBtn.innerText = "Undo";
                    task.style.textDecoration = "line-through";
                } else {
                    completedBtn.innerText = "Complete";
                    task.style.textDecoration = "none";
                }
            });


            deleteBtn.addEventListener("click", function() {
                list.removeChild(task);
            });
        }
    });
});