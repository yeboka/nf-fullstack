console.log("hello alem");

let todos = JSON.parse(localStorage.getItem("todos")) || []

console.log(todos);


console.log(todos);

// console.log(Date.now())

// Задание 1.
// Сделать функцию cupdateTodoList() которая будет обновалять
// наш список при каждом изменении.
// Взять UL и добавить в него li, span, и 2 копнки (edit, delete).

// Для Li дать стиль "list-group-item d-flex justify-content-between align-items-center"
// Для Button delete дать стиль "btn btn-danger btn-sm ml-2"
// Для Button edit дать стиль "btn btn-primary btn-sm ml-2"

// Добавить в LI > span, 2 кнопики
// Добавить в UL > LI


function updateTodoList() {
    const todoList = document.getElementById("todoList")
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        const span = document.createElement("span")
        span.textContent = todo.text

        const div = document.createElement("div")
        div.className = "d-flex gap-2"

        const editBtn = document.createElement("button")
        editBtn.className  = "btn btn-primary btn-sm ml-2"
        editBtn.textContent = "Edit"

        editBtn.addEventListener("click", () => {
            let newText = prompt(" Введите новое название", todo.text)
            if (!newText) newText = todo.text
            editTodo(todo.id, newText);
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.className  = "btn btn-danger btn-sm ml-2"
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", () => {
            deleteTodo(todo.id)
        })

        div.append(editBtn)
        div.append(deleteBtn)

        listItem.append(span)
        listItem.append(div)

        todoList.append(listItem)
    })
}

updateTodoList()

// Задание 2.
// Повесить на button Add event listner, который
// при нажатии вызывает функцию добавление todo

function addTodo () {
    const inputValue = document.getElementById("input").value

    // " word   " => "word"
    // "    " => ""

    if (inputValue.trim() === '') return;

    const newTodo = {
        id: Date.now(),
        text: inputValue,
    }
    todos.push(newTodo);
    updateTodoList();
    document.getElementById("input").value = ''
}

document.getElementById("addBtn").addEventListener("click", addTodo)


// Задание 3.
// Создать удаления "todo". Создать функцию которая
//  принимает id. Найти данный элемент в массиве
// и удалить его из него. Использовать filter на массив

function deleteTodo (id) {

    // let arr = [1, 2, 3, 4, 5, 6]
    // console.log(arr);
    
    // console.log(arr.filter((item) => item !== id));
    // arr = arr.filter((item) => item !== 5)

    todos = todos.filter((todo) => todo.id !== id);
    updateTodoList()
}


// Задание 4.
// Создать изменение "todo". Создать функцию
//  которая принимает (id, text). И изменяет элемент в массиве
// у которого id = id, на новый текст. Использовать findIndex на массив и prompt

function editTodo (id, newText) {
    // const todoItem = todos.find((todo) => todo.id === id)
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    // console.log("find", todoItem);
    // console.log("find Index", todoIndex);

    todos[todoIndex].text = newText
    updateTodoList()
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
window.addEventListener('beforeunload', saveTodos);
