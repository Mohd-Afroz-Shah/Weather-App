const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_value = document.getElementById('temp_value')
const day_now = document.getElementById('day_now')
const time_now = document.getElementById('time_now')
const temp_text = document.getElementById('temp_text')
// const getDateInfo = require('../js/info');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Enter the name of the city to searched`;
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d9abf0799f002ae3577d242799eb5ad7`
            const weather_data = await fetch(url);
            const jso = await weather_data.json();
            const arrData = [jso];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp_value.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            // const city = `${arrData[0].name}`; // Replace 'Your City' with a default city, e.g., 'New York'
            // const { date_y, day_y, time_y} = getDateInfo(city);

            // time_now.innerText = time_y

            const temp_temp_status = arrData[0].weather[0].main;
            if (temp_temp_status == "Clear") {
                temp_status.innerHTML =
                '<i class="fa fa-regular fa-cloud-sun fa-beat"></i>';
            }
            else if (temp_temp_status == "Clouds") {
                temp_status.innerHTML =
                    '<i class="fa fa-cloud">';
            }
            else if (temp_temp_status == "Rain") {
                temp_status.innerHTML =
                    '<i class="fa-sharp fa-solid fa-cloud-rain"></i>';
            }
            else {
                temp_status.innerHTML =
                    '<i class="fa fa-sharp fa-regular fa-cloud"></i>';
            }
        } catch (error) {
            city_name.innerText = `Enter a valid city name`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);