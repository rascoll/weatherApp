const url='https://api.openweathermap.org/data/2.5'
const key = 'API_KEY' //Your API Key
const setQuery = (e) => {
    if(e.keyCode == '13') 
        getResult(searchBar.value)
}
const getResult = (cityName) => {
let query=`${url}/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
fetch(query)
.then(weather => {
return weather.json()
})
.then(displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText=`${result.name},${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description.charAt(0).toUpperCase() + result.weather[0].description.slice(1);

    let minmaxtemp = document.querySelector('.minmaxtemp')
    minmaxtemp.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c `

}
document.addEventListener('DOMContentLoaded', () => {
    getResult('Istanbul');
});
const searchBar = document.getElementById('search');
searchBar.addEventListener('keypress', setQuery);
