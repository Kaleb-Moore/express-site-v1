const express = require('express');
const path = require('path');
const { projects } = require('./data.json');

const indexRoute = require('./views/index.pug');
// const aboutRoute = require('./views/about');

const app = express();

 app.set('view engine', 'pug');
 app.use('/static', express.static('public'))

 app.use('/', indexRoute)
//  app.get('/', (req, res, next) => {
//      res.locals = projects;
//      res.render('index', indexRoute);
//  });

 app.get('/about', (req, res, next) => {
     res.render('about')
 });

 app.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    res.render('project', { project });
 });

 app.listen(3000, "Port Listening on localhost:3000");