const currentWeather = document.querySelector(".current-weather");
const weatherForecast = document.querySelector(".weather-forecast");
const currentTemp = document.querySelector("#current-temp");
const currentIcon = document.querySelector("#current-icon");
const description = document.querySelector("#current-description");
const humidity = document.querySelector("#current-humidity");
const feelsLike = document.querySelector("#current-feels-like");
const dayOneMin = document.querySelector("#day-one-min");
const dayOneMax = document.querySelector("#day-one-max");
const dayTwoMin = document.querySelector("#day-two-min");
const dayTwoMax = document.querySelector("#day-two-max");
const dayThreeMin = document.querySelector("#day-three-min");
const dayThreeMax = document.querySelector("#day-three-max");
const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=47.67&lon=-116.78&units=imperial&appid=65a9eae82689d459b9b05fdeffb14b1d";
const futureURL = "https://api.openweathermap.org/data/2.5/forecast?lat=47.67&lon=-116.78&units=imperial&cnt=32&appid=65a9eae82689d459b9b05fdeffb14b1d";
const days = [[], [], [], [], []];
const forecast = [[], [], [], [], []];

async function currentApiFetch() {
  try {
    let response = await fetch(currentURL);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);

      displayCurrentResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function futureApiFetch() {
  try {
    let response = await fetch(futureURL);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);

      displayFutureResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentResults(data) {
  const iconSource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  let humid = data.main.humidity;
  let feel = data.main.feels_like;

  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  currentIcon.setAttribute("src", iconSource);
  currentIcon.setAttribute("alt", `${desc} icon`);
  description.textContent = desc;
  humidity.textContent = `Humidity: ${Math.round(humid)}%`;
  feelsLike.innerHTML = `Feels like: ${Math.round(feel)}&deg;F`;
}

function displayFutureResults(data) {
  calculateFutureResults(data);

  dayOneMax.innerHTML = `High: ${forecast[1][1]}&deg;F`;
  dayOneMin.innerHTML = `Low: ${forecast[1][0]}&deg;F`;
  dayTwoMax.innerHTML = `High: ${forecast[2][1]}&deg;F`;
  dayTwoMin.innerHTML = `Low: ${forecast[2][0]}&deg;F`;
  dayThreeMax.innerHTML = `High: ${forecast[3][1]}&deg;F`;
  dayThreeMin.innerHTML = `Low: ${forecast[3][0]}&deg;F`;
}

function calculateFutureResults(data) {
  const dayLength = 86400000;
  const date = new Date();
  const currentMill = date.getTime();

  data.list.forEach((measurement) => {
    // console.log(Math.floor((measurement.dt / dayLength) * 1000) - Math.floor(currentMill / dayLength));

    const dayNumber = Math.floor((measurement.dt / dayLength) * 1000) - Math.floor(currentMill / dayLength);

    days[dayNumber].push(measurement);
  });

  let dayCounter = 0;

  days.forEach((day) => {
    let sum = 0;
    let min = 999;
    let max = -999;

    day.forEach((item) => {
      sum += item.main.temp;
      if (min > item.main.temp) {
        min = item.main.temp;
      }
      if (max < item.main.temp) {
        max = item.main.temp;
      }
    });

    let average = sum / day.length;

    // console.log(forecast[dayCounter]);

    forecast[dayCounter].push(Math.round(min));
    forecast[dayCounter].push(Math.round(max));
    forecast[dayCounter].push(Math.round(average));

    dayCounter++;
  });
}

if (currentWeather) {
  currentApiFetch();
}

if (weatherForecast) {
  futureApiFetch();
}

// Add weekdays calculation if possible
// const milliseconds = 1643568000000; // 2022-03-08 00:00:00
// const dayOfWeek = new Date(milliseconds).getDay(); // 3 (Wednesday)
