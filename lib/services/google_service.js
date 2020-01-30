const fetch = require('node-fetch');

module.exports = async function fetchLatLng(location) {
  try {
    let api_key = process.env.GOOGLE_MAPS_KEY;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${api_key}`;
    let latLong = await fetch(url)
                          .then(response => response.json())
                          .then(data => data.results[0].geometry.location)
    return latLong;
  } catch(err) {
    console.log(err);
  }
}
