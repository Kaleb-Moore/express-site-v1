const express = require('express');
const router = express.Router();
const path = require('path');
const { projects } = require('./data.json');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static('public'))

 app.get('/', (req, res, next) => {
     res.locals = projects;
     res.render('index', { projects });
 });

app.get('/about', (req, res, next) => {
    res.render('about')
});

app.get('/projects/:id', (req, res, next) => {
const projectId = req.params.id;
const project = projects.find( ({ id }) => id === +projectId );

res.render('project', { project });
});

app.listen(3000, () => {
    console.log("Port Listening on localhost:3000");
});