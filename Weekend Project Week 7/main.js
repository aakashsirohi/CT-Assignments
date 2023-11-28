//console.log(testing);

const apiKey = '846bb030b74788c129ab318af732e6c1';





document.getElementById('locationForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;
  
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=846bb030b74788c129ab318af732e6c1`);
    const data = await response.json();
    console.log(data)
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <p>High: ${data.main.temp_max}°F</p>
      <p>Low: ${data.main.temp_min}°F</p>
      <p>Forecast: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.log('Error fetching weather data:', error);
    alert('Failed to fetch weather data. Please try again.');
  }
});
