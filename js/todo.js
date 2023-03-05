const todoform = document.getElementById("todo-form");
const todoInput = todoform.querySelector("input");
const todolist = document.getElementById("todo-list");

let toDos = [];
const saveTodos = localStorage.getItem("todos");

if(saveTodos != null) {
    const savetoDosArray = JSON.parse(saveTodos);
    console.log(savetoDosArray);
    savetoDosArray.forEach(element => {
        console.log(element);
        paintTodo(element.text, element.id);
    });
}

function onDeleteButtonClick(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id != li.id);
    li.remove();

    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintTodo(todoText, id){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = id;
    span.innerText = todoText;

    const newTodoObj = {
        id: id,
        text: todoText
    };

    toDos.push(newTodoObj);
    
    button.innerText = "X";
    button.addEventListener("click", onDeleteButtonClick);

    li.appendChild(span);
    li.appendChild(button);

    todolist.appendChild(li);
}

function onTodoSubmit(event){
    event.preventDefault();

    paintTodo(todoInput.value, Date.now());    
    todoInput.value = "";

    localStorage.setItem("todos", JSON.stringify(toDos));
}

todoform.addEventListener("submit", onTodoSubmit);