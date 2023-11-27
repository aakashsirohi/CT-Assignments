//console.log(testing);

const apiKey = 'd80c447a6128609677db0425aa7d17e5';

document.getElementById('locationForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;
  
  try {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    const data = await response.json();
    //console.log(data)
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <p>High: ${data.daily.temp.max}°F</p>
      <p>Low: ${data.daily.temp.min}°F</p>
      <p>Forecast: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.log('Error fetching weather data:', error);
    alert('Failed to fetch weather data. Please try again.');
  }
});