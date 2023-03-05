function onGeoOK(pos) {
    console.log(pos);
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f75b7dceaa60d98f69191812621ff44`
    
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;        
    });
    console.log(url);
}

function onGeoError() {
    alert("당신을 찾을 수 없습니다. 날씨를 제공하지 못해요.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);