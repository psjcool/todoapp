const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoUl = document.querySelector("#todo-ul")
const loadedTodos = localStorage.getItem("todos")

let todos = []

const PLACEHOLDER_DEFAULT = "할일을 작성하시고 엔터를 눌러주세요"

const todoFormHandler = (e) => {
  e.preventDefault()
  const check = localStorage.getItem("todos")
  if(check && JSON.parse(localStorage.getItem("todos")).length >= 10){
    todoInput.value = ""
    todoInput.placeholder="리스트가 너무 많아요!"
    return
  }
  const todo = todoInput.value
  todoInput.value = ""
  todoInput.placeholder = PLACEHOLDER_DEFAULT
  const todoObj = {
    id : Date.now(),
    value: todo
  }
  addLiHandler(todoObj)
  todos = !check ? [] : JSON.parse(localStorage.getItem("todos"))
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
  todoInput.placeholder=PLACEHOLDER_DEFAULT
  const getParent = e.path[1]
  const parseTodos = JSON.parse(localStorage.getItem("todos"))
  const filterdTodos = parseTodos.filter((val) => val.id !== parseInt(getParent.id))
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