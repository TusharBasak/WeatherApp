var inputBox= document.querySelector('.input-box');



const  searchBtn =document.getElementById('searchBtn');
const weather_img =document.querySelector('.weather-img');
const temparature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity =document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');

var display_info=document.querySelector('.display');
var flag_img = document.querySelector('.flag');
var continent_name= document.querySelector('.continent');
var official_name= document.querySelector('.official-name');
var alternative_name= document.querySelector('.alternative-name');
var capital  =document.querySelector('.capital');
var weekday =document.querySelector('.weekday');
var borders=document.querySelector('.borders');
var containers =document.querySelector('.container');

const location_not_found =document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(country){
    
//    document.querySelector('.input-box').value=" ";
    const api_key = "cd7cce47fcb5d027b980827b679b381f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response=>
      response.json()  );

     
      if(weather_data.cod===`404`){

        location_not_found.style.display="flex";
        weather_body.style.display="none";
        // window.location.reload();
         return;
      }
      location_not_found.style.display="none";
      weather_body.style.display="flex";
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
    // console.log(element);
    
    // console.log(weather_data);
   
}


function showcountryinfo(country){
    // var api=`nK24TkU8nqnvZZ0V1z1cP5ahYZN8w7R8xjpmKep9`;
    weather_body.style.display="none";
    containers.style.display="none";
  var value=country;
   var url=`https://restcountries.com/v3.1/name/${value}`;

   fetch (url)
   .then (res=> res.json() )
   .then( data => show(data))
}

function show (data) {
   console.log (data); 
   display_info.style.display="flex";
//    flag_img_url=`${data[0].flags.png}`;

   
   flag_img.innerHTML=`<img src="${data[0].flags.png}"> `;
   continent_name.innerHTML = `<b>Continent Name : </b>${data[0].continents[0]}`;
   official_name.innerHTML = `<b>Official  Name : </b>${data[0].name.official}`;
   
//    console.log(flag_img.src);
alternative_name.innerHTML = `<b>Alternative Names : </b>${data[0].altSpellings}`;
   
   capital.innerHTML = `<b>Capital Name : </b>${data[0].capital[0]}`;
   weekday.innerHTML = `<b>Start Of Week : </b>${data[0].startOfWeek}`;
   borders.innerHTML = `<b>Borders : </b>${data[0].borders}`;

}

function findnewcountry(){
    containers.style.display="flex";
    display_info.style.display="none";
    window.location.reload();
    

}

//  document.querySelector('.input-box').value=" ";

searchBtn.addEventListener('click', ()=>{
   
   
    checkWeather(inputBox.value);
    
   
});

detailbtn.addEventListener('click', ()=>{
   
    
    showcountryinfo(inputBox.value);
    document.querySelector('.input-box').value=" ";
   
});

findbtn.addEventListener('click', ()=>{
   
      findnewcountry();
    
    
   
});


