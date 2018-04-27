var Express = require('express');
var Sequelize = require('sequelize');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var apiRouterBinding = require('./app/api');

var app = Express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

apiRouterBinding(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    msg: err.message
  });
});

/**
 * Middelware to intercept requests and allow headers
 * basically for enabling CORS
 *
 * */
app.use(function (req, res, next) {
  
  //request sources
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  // Request methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  next();
});

module.exports = app;


