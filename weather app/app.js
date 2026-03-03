const input = document.getElementById("input-value");
const searchButton = document.getElementById("search-button");
const Degree = document.getElementById("Degree");
const CityName = document.getElementById("CityName");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
async function getData(cityName) {
  const apiValue =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=63287f5a454f4a2da8263447253101&q=${cityName}&aqi=yes
`);
  return await apiValue.json();
}
searchButton.addEventListener("click", async () => {
  const value = input.value.trim();
  const data = await getData(value);
  console.log(data);
  Degree.innerHTML = `${data.current.temp_c}°C`;
  CityName.innerText = value;
  windSpeed.innerText = `${data.current.wind_kph} km/h`;
  humidity.innerText = `${data.current.humidity}%`;
  if (data.current.conditon.text == clouds) {
    weatherIcon.src = "clouds.png";
  } else if (data.current.conditon.text == mist) {
    weatherIcon.src = "mist.png";
  } else if (data.current.conditon.text == clear) {
    weatherIcon.src = "clear.png";
  } else if (data.current.conditon.text == rain) {
    weatherIcon.src = "rain.png";
  } else if (data.current.conditon.text == humidity) {
    weatherIcon.src = "humidity.png";
  } else if (data.current.conditon.text == snow) {
    weatherIcon.src = "snow.png";
  } else if (data.current.conditon.text == drizzle) {
    weatherIcon.src = "drizzle.png";
  } else {
    console.log("error occured");
  }
});
