'use strict';

function setupAdminUser(app) {
  if(process.env.AUTH_USER && process.env.AUTH_PASS) {
    let userService = app.service('users');
    let user = process.env.AUTH_USER;
    let pass = process.env.AUTH_PASS;
    userService.find({}).then((data) => {
      if (data.total === 0) {
        // There are no users, add the admin user.
        userService.create({username: user, password: pass});
      }
    });
  }
}

module.exports = function() {
  const app = this;

  setupAdminUser(app);
};
