let todos = [];
function addTodo() {
    if (document.querySelector("#todo-input").value === "") {
        checkInput();
    }
    else {
        todos.push({
            title: document.querySelector("#todo-input").value,
            id: todos.length,
        });
        render();
    }

}
document.querySelector("#todo-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function createTodoElement(todo) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("class", "delete-button");

    button.addEventListener("click", function () {
        const index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
            render();
        }
    });
    div.style.padding = "0.5rem";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    h3.innerHTML = (todo.id + 1) + ". " + todo.title;
    div.appendChild(h3);
    div.appendChild(button);

    document.querySelector("#todo-list").appendChild(div);
    document.querySelector("#todo-input").value = "";
    return div;
}
function render() {
    document.querySelector("#todo-list").innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const element = createTodoElement(todos[i]);
        document.querySelector("#todo-list").appendChild(element);
    }
}

function checkInput() {
    const span = document.createElement("span");
    span.innerHTML = "Please Input Value &#128544;";
    const button = document.querySelector("#add-button");
    const button1 = document.querySelector("#delete-first-button");
    const button2 = document.querySelector("#delete-last-button");
    document.querySelector("#todo-container").appendChild(span);
    span.style.color = "red";
    span.style.fontSize = "18px";
    span.style.fontWeight = "bold";
    span.style.display = "flex";
    span.style.justifyContent = "left";
    button.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
    setTimeout(() => {
        document.querySelector("#todo-container").removeChild(span);
        button.disabled = false;
        button1.disabled = false;
        button2.disabled = false;
    }, 3000);
}

function checkTodo() {
    const span = document.createElement("span");
    span.innerHTML = "Nothing to delete &#128540;";
    const button = document.querySelector("#add-button");
    const button1 = document.querySelector("#delete-first-button");
    const button2 = document.querySelector("#delete-last-button");
    document.querySelector("#todo-container").appendChild(span);
    span.style.color = "red";
    span.style.fontSize = "18px";
    span.style.fontWeight = "bold";
    span.style.display = "flex";
    span.style.justifyContent = "left";
    button.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
    setTimeout(() => {
        document.querySelector("#todo-container").removeChild(span);
        button.disabled = false;
        button1.disabled = false;
        button2.disabled = false;
    }, 3000);
}


function deleteLastTodo() {
    if (todos.length === 0) {
        checkTodo();
    }
    else {
        todos.pop();
        render();
    }

}

function deleteFirstTodo() {
    if (todos.length === 0) {
        checkTodo()
    }
    else {
        todos.shift();
        render();
    }

}
