const userService = require('../services/user');

const userApiBindings = (app) => {
  
  app.get('/user', async (req, res, next) => {
    try {
      
      var data = await userService.createUser("hello_user");
      
      console.log(data.id + " id created for new user");
      
      res.json({
        status: "success",
        id: data.id,
        name: data.username,
      });
      
    } catch (err) {
      next(err);
      console.error(err);
    }
  });
};

module.exports = userApiBindings;