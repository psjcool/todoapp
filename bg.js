const bg = ["0.jpg","1.jpg","2.jpg"]

const selectedBg = bg[ Math.floor( Math.random() * bg.length )]

const createImgTag = document.createElement("img")
createImgTag.src = `img/${selectedBg}`
createImgTag.classList.add("bg")

document.body.appendChild(createImgTag)