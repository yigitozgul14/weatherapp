const apiKey="5d9c3c4157d6d7807e4460dbf85f720e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//apiurlden apiid kısmını sildik
const city=document.getElementById("input");
const searchButton=document.querySelector("#button");
const weatherİcon=document.querySelector(".weather-icon");
searchButton.addEventListener("click",checkWeather);
document.addEventListener("DOMContentLoaded",openWeather);
async function checkWeather(){    
    const response= await fetch(apiUrl+city.value+`&appid=${apiKey}`);
    const data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    if(data.weather[0].main==="Clouds"){
        weatherİcon.src="images/clouds.png";}
    else if(data.weather[0].main==="Rain"){
        weatherİcon.src="images/rain.png";}    
    else if(data.weather[0].main==="Clear"){
        weatherİcon.src="images/clear.png";} 
    else if(data.weather[0].main==="Drizzle"){
        weatherİcon.src="images/drizzle.png";}
    else if(data.weather[0].main==="Mist"){
        weatherİcon.src="images/mist.png";}
    document.querySelector(".weather").style.display="block";        
    
     
    }
async function openWeather(){    
    const response= await fetch(apiUrl+"Adıyaman"+`&appid=${apiKey}`);
    const data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    if(data.weather[0].main==="Clouds"){
        weatherİcon.src="images/clouds.png";}
    else if(data.weather[0].main==="Rain"){
        weatherİcon.src="images/rain.png";}    
    else if(data.weather[0].main==="Clear"){
        weatherİcon.src="images/clear.png";} 
    else if(data.weather[0].main==="Drizzle"){
        weatherİcon.src="images/drizzle.png";}
    else if(data.weather[0].main==="Mist"){
        weatherİcon.src="images/mist.png";}
    document.querySelector(".weather").style.display="block";        
    
     
    }    


