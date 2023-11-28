//console.log(testing);

function kelvinToFahrenheit(k) {
  return ((k - 273.15) * 9/5 + 32).toFixed(2);
}


async function getWeather() {
  const city = document.getElementById('cityInput').value;

  try {
    const apiKey = '846bb030b74788c129ab318af732e6c1'; // Replace with your OpenWeather API key
    const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
    
    //https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}
    
    const locationResponse = await fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}`);
    const locationData = await locationResponse.json();
    const { coord: { lat, lon } } = locationData;

    // using latitude and longitude
    const weatherResponse = await fetch(`${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();

    // Displaying weather information
    document.getElementById('city').innerText = weatherData.name;
    document.getElementById('high').innerText = kelvinToFahrenheit(weatherData.main.temp_max) + "°F";
    document.getElementById('low').innerText = kelvinToFahrenheit(weatherData.main.temp_min) + "°F";
    document.getElementById('forecast').innerText = weatherData.weather[0].description;
    document.getElementById('humidity').innerText = weatherData.main.humidity + "%";

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

