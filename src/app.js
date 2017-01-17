'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const morgan = require('morgan');
const middleware = require('./middleware');
const services = require('./services');
const setup = require('./setup');

const app = feathers();

if(app.get('livereload')) {
  const livereload = require('express-livereload');
  livereload(app, {
    watchDir: process.cwd()
  });
}

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(morgan('common'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(setup)
  .configure(middleware)
  // Any other routes should default to our index.html so Angular can load and handle the route.
  .use(function(req, res){
    res.sendFile(path.join(app.get('public'), 'index.html'));
  });

module.exports = app;
