const google = require('./google_service')
const fetch = require('node-fetch');

module.exports = async function fetchWeatherData(location) {
  try {
    let latLong = await google(location).then(data => data)
    let api_key = process.env.DARKSKY_KEY;
    let url = `https://api.darksky.net/forecast/${api_key}/${latLong.lat},${latLong.lng}`;
    let weatherData = await fetch(url)
                          .then(response => response.json())
                          .then(data => data)
    return weatherData;
  } catch(err) {
    console.log(err);
  }
}
