var express = require('express');
var router = express.Router();
const google = require('../../../lib/services/google_service')

const enviroment = process.env.NODE_ENV || 'development'
const config = require("../../../knexfile")[enviroment]
const database = require("knex")(config)

router.get('/', (req, res) => {
  console.log(req.body.api_key)
  console.log(req.query.location)
  database('users').where("api_key", req.body.api_key).first()
    .then(user => {
      console.log(user)
      if (user) {
        console.log('Yay we did it');
        // google(req.query.location).then(data => {
        //   data
        // })
      } else {
        res.status(401).json({error: 'Unauthorized'});
      }
  }).catch(error => console.log(error));
});

module.exports = router;
