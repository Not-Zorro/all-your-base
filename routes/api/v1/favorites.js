var express = require('express');
var router = express.Router();

const enviroment = process.env.NODE_ENV || 'development'
const config = require("../../../knexfile")[enviroment]
const database = require("knex")(config)
const makeFavorite = require('../../../helpers/favorites').create
const delFavorite = require('../../../helpers/favorites').remove

router.post('/', (req, res) => {
  let location = req.body.location
  database('users').where("api_key", req.body.api_key).first()
    .then(user => {
      if (user) {
        if (!location) {
          return res.status(422).send(
            { error: "Expected format: { location: <String> }. You're missing a location property." }
          );
        }
      makeFavorite(location, user.id).then(favorite =>
        res.status(favorite.status).json(favorite.message)
      )
    };
  }).catch(error => {
    res.status(401).json({error: 'Unauthorized'})
  })
});

router.delete('/', (req, res) => {
  let location = req.body.location
  database('users').where("api_key", req.body.api_key).first()
    .then(user => {
      if (user) {
        if (!location) {
          return res.status(422).send(
            { error: "Expected format: { location: <String> }. You're missing a location property." }
          );
        }
      delFavorite(location, user.id).then(favorite =>
        res.status(favorite.status).json(favorite.message)
      )
    };
  }).catch(error => {
    res.status(401).json({error: 'Unauthorized'})
  })
});

module.exports = router;
