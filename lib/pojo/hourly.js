function hourly(data) {
  return {
    summary: data.hourly.summary,
    icon: data.hourly.icon,
    data: data.hourly.data.map(hour => {
      return {
      time: hour.time,
      summary: hour.summary,
      icon: hour.time,
      precipIntensity: hour.precipIntensity,
      precipProbability: hour.precipProbability,
      temperature: hour.temperature,
      humidity: hour.humidity,
      pressure: hour.pressure,
      windSpeed: hour.windSpeed,
      windGust: hour.windGust,
      windBearing: hour.windBearing,
      cloudCover: hour.cloudCover,
      visibility: hour.visibility
      }
    })
  }
}

module.exports = hourly;
