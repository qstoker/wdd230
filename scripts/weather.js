const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#weather-description");
const place = document.querySelector("#weather-location");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=47.72&lon=-116.95&units=imperial&appid=65a9eae82689d459b9b05fdeffb14b1d";

async function apiFetch() {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();

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
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  description.textContent = `${desc}`;
  place.textContent = `${data.name}, ${data.sys.country}`;
}

apiFetch();
