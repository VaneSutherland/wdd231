const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector("#forecast");

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-32.93&lon=-71.54&appid=9d566a6cbe985c5ad41b6114a4f6dc31&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;

  const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  let desc = data.list[0].weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

  const tempHigh = Math.round(data.list[0].main.temp_max);
  const tempLow = Math.round(data.list[0].main.temp_min);
  const humidity = data.list[0].main.humidity;
  const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();

  const currentWeatherInfo = `
    <p><strong>Description:</strong> ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
    <p><strong>High:</strong> ${tempHigh}&deg;F</p>
    <p><strong>Low:</strong> ${tempLow}&deg;F</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Sunrise:</strong> ${sunrise}</p>
    <p><strong>Sunset:</strong> ${sunset}</p>
  `;
  currentTemp.insertAdjacentHTML('afterend', currentWeatherInfo); 
  const forecastData = getForecastForNextDays(data);
  forecastContainer.innerHTML = "";

  forecastData.forEach((day, index) => {
    const date = new Date(day.dt * 1000);
    const temp = Math.round(day.main.temp);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); 

    const forecastHTML = `
      <div class="forecast-card">
        <p><strong>${index === 0 ? "Today" : dayOfWeek}</strong></p> <!-- Días en negrita -->
        <p>${temp}&deg;F</p>
      </div>
    `;
    forecastContainer.innerHTML += forecastHTML;
  });
}

function getForecastForNextDays(data) {
  const today = new Date();
  const tomorrow = new Date(today);
  const dayAfterTomorrow = new Date(today);
  const thirdDay = new Date(today);

  tomorrow.setDate(today.getDate() + 1);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  thirdDay.setDate(today.getDate() + 3);

  const forecastData = [];

  data.list.forEach(item => {
    const itemDate = new Date(item.dt * 1000);

    if (isSameDay(itemDate, today)) {
      forecastData.push(item);
    } else if (isSameDay(itemDate, tomorrow)) {
      forecastData.push(item);
    } else if (isSameDay(itemDate, dayAfterTomorrow)) {
      forecastData.push(item);
    } else if (isSameDay(itemDate, thirdDay)) {
      forecastData.push(item);
    }
  });

  const uniqueForecastData = [];
  uniqueForecastData.push(forecastData[0]);
  uniqueForecastData.push(forecastData[8]);
  uniqueForecastData.push(forecastData[16]); 
  uniqueForecastData.push(forecastData[24]); 
  return uniqueForecastData;
}

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
}

apiFetch();
