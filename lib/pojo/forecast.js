const current = require('./current')
const daily = require('./daily')
const hourly = require('./hourly')

class Forecast {
  constructor(location, data) {
    this.location = location;
    this.data = data;
  }

  fullCast() {
    return {
      location: this.location,
      currently: current(this.data),
      hourly: hourly(this.data),
      daily: daily(this.data)

    }
  }
}

module.exports = Forecast;
