const enviroment = process.env.NODE_ENV || 'development'
const config = require("../knexfile")[enviroment]
const database = require("knex")(config)

function create(location, id) {
  return database('favorites').insert({user_id: id, location: location}, 'id')
  .then(favorite => {
    return {
        message: { message: `${location} has been added to your favorites` },
        status: 200 }
  })
  .catch(error => {
    return {
      message: { error: error },
      status: 500 }
  });
}

function remove(location, id) {
  console.log(location)
  console.log(id)
  return database('favorites').del().where({user_id: id, location: location})
  .then(favorite => {
    return { status: 204 }
  })
  .catch(error => {
    return {
      message: { error: error },
      status: 500 }
  });
}

module.exports = {
  create: create,
  remove: remove
}
