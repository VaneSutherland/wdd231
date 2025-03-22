const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=9d566a6cbe985c5ad41b6114a4f6dc31"

// Function to fetch weather data
async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data);  // Logging data for debugging
          displayResults(data);  // Calling the function to display the results
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

// Function to display weather data on the page
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;  
  const iconsrc = `https://openweathermap.org/img/wn/10d@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();