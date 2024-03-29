const inputBox= document.querySelector('.input-box');
const  searchBtn =document.getElementById('searchBtn');
const weather_img =document.querySelector('.weather-img');
const temparature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity =document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');


async function checkWeather(country){
    const api_key = "cd7cce47fcb5d027b980827b679b381f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response=>
      response.json()  );

     
   
     
    temparature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;



   
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});