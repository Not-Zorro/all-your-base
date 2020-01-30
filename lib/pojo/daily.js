function daily(data) {
  return {
    summary: data.daily.summary,
    icon: data.daily.icon,
    data: data.daily.data.map(day => {
      return {
      time: day.time,
      summary: day.summary,
      icon: day.time,
      precipIntensity: day.precipIntensity,
      precipProbability: day.precipProbability,
      temperature: day.temperature,
      humidity: day.humidity,
      pressure: day.pressure,
      windSpeed: day.windSpeed,
      windGust: day.windGust,
      windBearing: day.windBearing,
      cloudCover: day.cloudCover,
      visibility: day.visibility
      }
    })
  }
}

module.exports = daily;
