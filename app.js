require('dotenv').config()
const express = require("express"); const app = express();
const bodyParser = require("body-parser");
const enviroment = process.env.NODE_ENV || 'development'
const config = require("./knexfile")[enviroment]
const database = require("knex")(config)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", process.env.PORT || 3000);
app.locals.title = "Publications";

var indexRouter = require('./routes/index');
var forecastRouter = require('./routes/api/v1/forecast');
var favoriteRouter = require('./routes/api/v1/favorites');

app.use('/', indexRouter);
app.use('/api/v1/forecast', forecastRouter);
app.use('/api/v1/favorites', favoriteRouter);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
