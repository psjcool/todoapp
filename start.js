const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const sayHello = document.querySelector("#sayHello")
const logined = document.querySelector("#logined")
const logoutBtn = document.querySelector("#logined button")

const storageUsername = localStorage.getItem("username")

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(num) {
  const userName = loginInput.value
  localStorage.setItem("username",userName)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  onSayHello(userName)
}

function onSayHello(username){
  sayHello.innerText = `안녕하세요! ${username}님!`
  logined.classList.remove(HIDDEN_CLASSNAME)
}

function onLogout(){
  localStorage.removeItem("username")
}

if(storageUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", (e) => {onLoginSubmit(123); e.preventDefault();})
}else{
  onSayHello(storageUsername)
}

logoutBtn.addEventListener("click", onLogout)