//Imports and sets up Express
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes')
const errorRoutes = require('./routes/error');

//Sets Pug as the view engine
app.set('view engine', 'pug');

//Serves static files to express at /static
app.use('/static', express.static('public'))

//Handles routes for Homepage, about, and projects
app.use(mainRoutes);

//Handles 404 errors
app.use(errorRoutes.fourOneFourHandler);

//Handles global errors
app.use(errorRoutes.globalHandler);

//Listens for app on port 3000
app.listen(3000, () => {
    console.log("Port Listening on localhost:3000");
});