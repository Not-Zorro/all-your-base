function current(data) {
  return {
    summary: data.currently.summary,
    icon: data.currently.icon,
    precipIntensity: data.currently.precipIntensity,
    precipProbability: data.currently.precipProbability,
    temperature: data.currently.temperature,
    humidity: data.currently.humidity,
    pressure: data.currently.pressure,
    windSpeed: data.currently.windSpeed,
    windGust: data.currently.windGust,
    windBearing: data.currently.windBearing,
    cloudCover: data.currently.cloudCover,
    visibility: data.currently.visibility
  }
}

module.exports = current;
