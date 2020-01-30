const Current = require('./current')
const Daily = require('./daily')
const Hourly = require('./hourly')

class Forecast {
  constructor(location, data) {
    this.location = location;
    this.data = data;
  }

  fullCast() {
    return {
      location: this.location,
      currently: new Current(this.data),
      hourly: new Hourly(this.data),
      daily: new Daily(this.data)

    }
  }
}

module.exports = Forecast;
