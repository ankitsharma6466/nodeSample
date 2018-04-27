var models  = require('../../db/models');

module.exports = {
  getUsersList: async () => {
    // models.User.findAll()
  },
  createUser: (name) => models.User.create({
    username: name
  })
};
