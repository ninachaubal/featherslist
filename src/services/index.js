'use strict';
const ad = require('./ad');
const group = require('./group');
const category = require('./category');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(category);
  app.configure(group);
  app.configure(ad);
};
