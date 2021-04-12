window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'http://alloworigin.com/get?url=http://example.com';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=147135ae9951094e2fba918f35d7416f`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                    const name = data.name;
                    const temp = data.main.temp;
                    const description = data.weather[0].description;
                    const k = 273;
                    //Set DOM Elements
                    temperatureDegree.textContent = Math.round(temp) - k;
                    locationTimezone.textContent = name;
                    temperatureDescription.textContent = description;

                });
        });
    }
    else
    {
        h1.textContent = "error of navigator";
    }

});