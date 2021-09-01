const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoUl = document.querySelector("#todo-ul")
const loadedTodos = localStorage.getItem("todos")

let todos = []

const todoFormHandler = (e) => {
  e.preventDefault()
  const todo = todoInput.value
  todoInput.value = ""
  const todoObj = {
    id : Date.now(),
    value: todo
  }
  addLiHandler(todoObj)
  todos.push(todoObj)
  localStorage.setItem("todos", JSON.stringify(todos))
}

const addLiHandler = ({id, value}) => {
  const li = document.createElement("li")
  li.id = id
  const span = document.createElement("span")
  span.innerText = value
  const btn = document.createElement("button")
  btn.innerText = "❌"
  btn.addEventListener("click",removeLiHandler)
  li.appendChild(span)
  li.appendChild(btn)
  todoUl.appendChild(li)
}

const removeLiHandler = (e) => {
  const getParent = e.path[1]
  const parseTodos = JSON.parse(localStorage.getItem("todos"))
  const filterdTodos = parseTodos.filter((val) => val.id !== Number(getParent.id))
  localStorage.setItem("todos",JSON.stringify(filterdTodos))
  getParent.remove()
}

todoForm.addEventListener("submit",todoFormHandler)


if(loadedTodos){
  const parseTodos = JSON.parse(loadedTodos)
  todos = parseTodos
  parseTodos.map( (todo) => addLiHandler(todo))
}

// console.log(todoForm, todoInput, todoUl)