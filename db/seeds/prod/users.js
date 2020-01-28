exports.seed = function(knex) {
  return knex('favorites').del()
    .then(() => knex('users').del())
    .then(() => {
      return Promise.all([
        knex('users').insert({api_key: 'rots'}, 'id')
        .then(user => {
          return knex('favorites').insert([
            { location: 'Denver, CO', user_id: user[0] },
            { location: 'San Diego, CA', user_id: user[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
