 let todos = [];
function addTodo() {
    if (document.querySelector("#todo-input").value === "") {
      checkInput();
    }
    else{
        todos.push({
            title: document.querySelector("#todo-input").value,
        });
       render();
    }
    
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


function checkInput() {
    const span = document.createElement("span");
    span.innerHTML = "Please input value";
    const button = document.querySelector("#add-button");
    button.disabled = true;
    document.querySelector("#todo-container").appendChild(span);
     span.style.color = "red";
     span.style.display = "flex";
     span.style.justifyContent = "left";
    setTimeout(() => {
     document.querySelector("#todo-container").removeChild(span);
     button.disabled = false;
    }, 3000);
}
