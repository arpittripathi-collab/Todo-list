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
    if (todos.length === 0) {
        checkTodo();
    }
    else{
        todos.splice(todos.length-1,1);
        render();
    }
    
}
function deleteFirstTodo() {
    if (todos.length === 0) {
        checkTodo()
    }
    else{
        todos.splice(0,1);
        render();
    }
    
}


function checkInput() {
    const span = document.createElement("span");
    span.innerHTML = "Please Input Value &#128544;";
    const button = document.querySelector("#add-button");
    document.querySelector("#todo-container").appendChild(span);
     span.style.color = "red";
     span.style.fontSize = "18px";
     span.style.fontWeight = "bold";
     span.style.display = "flex";
     span.style.justifyContent = "left";
     button.disabled = true;
    setTimeout(() => {
     document.querySelector("#todo-container").removeChild(span);
     button.disabled = false;
    }, 3000);
}

function checkTodo(){
    const span = document.createElement("span");
    span.innerHTML = "Nothing to delete &#128540;";
    const button1 = document.querySelector("#delete-first-button");
    const button2 = document.querySelector("#delete-last-button");
    document.querySelector("#todo-container").appendChild(span);
    span.style.color = "red";
    span.style.fontSize = "18px";
    span.style.fontWeight = "bold";
    span.style.display = "flex";
    span.style.justifyContent = "left";
    button1.disabled = true;
    button2.disabled = true;
    setTimeout(() => {
        document.querySelector("#todo-container").removeChild(span);
        button1.disabled = false;
        button2.disabled = false;
       }, 3000);
}
