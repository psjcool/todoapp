const clock = document.querySelector("#clock h2")

const tikutaku = () => {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2,"0")
  const minite = String(date.getMinutes()).padStart(2,"0")
  const second = String(date.getSeconds()).padStart(2,"0")
  clock.innerText = `${hour}:${minite}:${second}`
}
tikutaku()
setInterval(tikutaku, 1000)