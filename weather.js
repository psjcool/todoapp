const API_KEY = "ae5ba1c4b4e5bd439f20736b8b236750"
const cityHtml = document.querySelector("#weather h2:first-child")
const tempHtml = document.querySelector("#weather h2:nth-of-type(2)")
const weatherHtml = document.querySelector("#weather h2:last-child")

const mapHtml = document.querySelector("#map")



let lat
let lon

const canGetWeather = (position) => {
  lat = position.coords.latitude
  lon = position.coords.longitude
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cityHtml.innerText = data.name
      tempHtml.innerText = Math.floor( data.main.temp)
      weatherHtml.innerText = data.weather[0].main
    })
  const mapOption = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 3
  }
  const map = new kakao.maps.Map(mapHtml, mapOption)
}

const cantGetWeather = () => {
  alert("plz allow me!")
}

navigator.geolocation.getCurrentPosition(canGetWeather, cantGetWeather)




console.log(lat, lon)

