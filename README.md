# featherslist

> A Craigslist style app using Feathers and Angular2

## About

This project uses [Feathers](http://feathersjs.com) and [Angular2](https://angular.io) to build a Craigslist
like classifieds app. It also serves as an example app for using Angular2 with Feathers.

## NOTE: This is a work in progress and not ready for production.

## Getting Started
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed and have a [MongoDB](https://www.mongodb.com) instance running.

2. Clone the repository.
```
$> git clone https://github.com/cupcakesystems/cupcakehelpline.git
```

3. Configure.
Update the configurations under `config/` to your needs. Make sure the `"mongodb"` variable in the config points to your database.

4. Setup admin user
Set the `AUTH_USER` environment variable to the username for the admin user and the `AUTH_PASS` environment variable to the password for the admin user. When the server runs for the first time, it will create the admin user using these credentials. These environment variables can then be removed if desired.

5. Install dependencies & build the project
```
$> npm install
$> npm run build
```

6. Start the server.
```
#> npm start
```
You can also start the app in developer mode to watch for changes and livereload.
```
$> npm run start-dev
```

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
