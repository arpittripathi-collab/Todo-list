 let todos = [];
function addTodo() {
    if (document.querySelector("#todo-input").value === "") {
        alert("Please enter a todo");
        return;
    }
    todos.push({
        title: document.querySelector("#todo-input").value,
    });
    document.querySelector("#add-button").addEventListener("click", addTodo);
   render();
}
function createTodoElement(todos) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    div.innerHTML = todos.title ;
    div.appendChild(h1);
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
function deleteLastTodo() {
    todos.splice(todos.length-1,1);
    render();
}
function deleteFirstTodo() {
    todos.splice(0,1);
    render();
}

document.querySelector("#add-button").addEventListener("click", addTodo);
document.querySelector("#todo-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

