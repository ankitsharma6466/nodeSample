const userApi = require('./user');

const apiRouterBinding = (app) => {
  userApi(app);
};

module.exports = apiRouterBinding;