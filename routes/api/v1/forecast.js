var express = require('express');
var router = express.Router();
const darksky = require('../../../lib/services/darksky_service')
const makeForecast = require('../../../lib/pojo/forecast')

const enviroment = process.env.NODE_ENV || 'development'
const config = require("../../../knexfile")[enviroment]
const database = require("knex")(config)

router.get('/', (req, res) => {
  database('users').where("api_key", req.body.api_key).first()
    .then(user => {
      if (user) {
        if(req.query.location) {
          darksky(req.query.location).then(data => {
            res.status(200).json((new makeForecast(req.query.location, data)).fullCast());
          })
        } else {
          res.status(401).json({error: 'No location provided'});
        }
      }
  }).catch(error => res.status(401).json({error: 'Unauthorized'}));
});

module.exports = router;
