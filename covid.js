const covidBtn = document.querySelector(".covid-btn")
let LOADED_SWITCH = false
const API_KEY_COVID = "RH8fuOiKGZ3J0RMcI%2BWX0tINFW8H3258QscZw1jnyzdcpukvPmH9G9voZUhIDIUJ0XdQejx4KbpFBWlJ6WcHQQ%3D%3D"
const CONFIG = {
  headers: {
    'Accept': 'application/json'
  }
}

const onCovidBtn = () => {
  if(LOADED_SWITCH){
    return
  }
  covidBtn.innerText = "집계중..."
  checkDate()
}

const checkDate = () => {
  const now = new Date()
  const yesterday = new Date(new Date().setDate(new Date().getDate()-1))
  const yesyesterday = new Date(new Date().setDate(new Date().getDate()-2))
  let url
  let day

  if(now.getHours() >= 10){
    const str1 = String(now.getFullYear()) + String(now.getMonth()+1).padStart(2,0) + String(now.getDate()).padStart(2,0)
    const str2 = String(yesterday.getFullYear()) + String(yesterday.getMonth()+1).padStart(2,0) + String(yesterday.getDate()).padStart(2,0)
    url = `startCreateDt=${str2}&endCreateDt=${str1}`
    day = `${String(yesterday.getMonth()+1).padStart(2,0)}월 ${String(yesterday.getDate()).padStart(2,0)}일 기준`
  }else{
    const str1 = String(yesterday.getFullYear()) + String(yesterday.getMonth()+1).padStart(2,0) + String(yesterday.getDate()).padStart(2,0)
    const str2 = String(yesyesterday.getFullYear()) + String(yesyesterday.getMonth()+1).padStart(2,0) + String(yesyesterday.getDate()).padStart(2,0)
    url = `startCreateDt=${str2}&endCreateDt=${str1}`
    day = `${String(yesyesterday.getMonth()+1).padStart(2,0)}월 ${String(yesyesterday.getDate()).padStart(2,0)}일 기준`
  }
  getCovidData(url, day)
}

const getCovidData = (url, day) => {
  fetch(`https://covid-19checker.herokuapp.com/http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${API_KEY_COVID}&pageNo=1&numOfRows=10&${url}`, CONFIG)
  .then(data => data.json())
  .catch(error => {
    console.log(error)
    covidBtn.innerText = "집계실패"
  })
  .then(data => {
    loadedData(data, day)
  })
}

const loadedData = (data, day) =>{
  LOADED_SWITCH = true
  const [dayOne, dayTwo] = data.response.body.items.item
  const decideCnt = dayOne.decideCnt - dayTwo.decideCnt
  covidBtn.innerHTML = `${day}<br>${decideCnt} 명`
}

covidBtn.addEventListener("click",onCovidBtn)
