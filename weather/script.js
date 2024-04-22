const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="496b10f99688e57e807883c7117bb024"

const searcharea=document.querySelector(".searcharea");
const searchbtn=document.querySelector(".searchbtn");
const pics=document.querySelector(".pic");


async function weatherapp(city){
    const response=await fetch(apiUrl+city+'&appid=496b10f99688e57e807883c7117bb024');
    var data=await response.json();
    console.log(data);
    const cityname=document.querySelector(".city");
    cityname.innerHTML=data.name;
    const temperature=document.querySelector(".temp");
    temperature.innerHTML=Math.round(data.main.temp)+"℃";
    const humidity=document.querySelector(".humidity");
    humidity.innerHTML=data.main.humidity+"%";
    const speed=document.querySelector(".windspeed");
    speed.innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="Clouds") {
        pics.src="clouds.png";
    }
    else if(data.weather[0].main=="Drizzle") {
        pics.src="drizzle.png";
    }
    else if(data.weather[0].main=="Clear") {
        pics.src="clear.png";
    }
    else if(data.weather[0].main=="Mist") {
        pics.src="mist.png";
    }
    else if(data.weather[0].main=="Rain") {
        pics.src="rain.png";
    }
    else if(data.weather[0].main=="Snow") {
        pics.src="snow.png";
    }
}

searchbtn.addEventListener("click",function(event){
    weatherapp(searcharea.value);
})


