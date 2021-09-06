const cityHtml = document.querySelector("#weather p:first-child")
const tempHtml = document.querySelector("#weather p:nth-of-type(2)")
const weatherHtml = document.querySelector("#weather p:last-child")

const mapHtml = document.querySelector("#map")
const openMap = document.querySelector(".openMap")
const closeMap = document.querySelector(".wrapMap button")
const mapWrap = document.querySelector(".wrapMap")

let lat
let lon

const API_KEY = "ae5ba1c4b4e5bd439f20736b8b236750"

const canGetWeather = (position) => {
  lat = position.coords.latitude
  lon = position.coords.longitude
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cityHtml.innerText = data.name
      tempHtml.innerText = Math.floor(data.main.temp) + "°C"
      weatherHtml.innerText = data.weather[0].main
    })
}

const cantGetWeather = () => {
  return alert("위치 정보 엑세스를 허용해주세요! ")
}

navigator.geolocation.getCurrentPosition(canGetWeather, cantGetWeather)

function createMap(){
  const mapOption = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 3
  }
  const map = new kakao.maps.Map(mapHtml, mapOption)
}

openMap.addEventListener("click", () => {
  if(lat === undefined){
    alert("위치 정보 엑세스를 허용해주세요! ")
  }else{
    mapWrap.style.display = "flex"
    createMap()
  }
  }
)

closeMap.addEventListener("click", () => {
  mapWrap.style.display = "none"
})