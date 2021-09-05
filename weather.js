const API_KEY = "ae5ba1c4b4e5bd439f20736b8b236750"
const cityHtml = document.querySelector("#weather p:first-child")
const tempHtml = document.querySelector("#weather p:nth-of-type(2)")
const weatherHtml = document.querySelector("#weather p:last-child")

const mapHtml = document.querySelector("#map")
const openMap = document.querySelector(".openMap")
const closeMap = document.querySelector(".wrapMap button")
const mapWrap = document.querySelector(".wrapMap")

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
      tempHtml.innerText = Math.floor(data.main.temp) + "°C"
      weatherHtml.innerText = data.weather[0].main
    })
}

const cantGetWeather = () => {
  return
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

// fetch(`https://cors-anywhere.herokuapp.com/http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=RH8fuOiKGZ3J0RMcI%2BWX0tINFW8H3258QscZw1jnyzdcpukvPmH9G9voZUhIDIUJ0XdQejx4KbpFBWlJ6WcHQQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315`,{method: "GET"})
// .then(data => data.json())
// .catch(error => console.log(error))
// .then(data => console.log(data))

// fetch(`https://cors-anywhere.herokuapp.com/http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=RH8fuOiKGZ3J0RMcI%2BWX0tINFW8H3258QscZw1jnyzdcpukvPmH9G9voZUhIDIUJ0XdQejx4KbpFBWlJ6WcHQQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200410&endCreateDt=20200410`)
// .then(data => console.log(data))
// .catch(error => console.log(error))
