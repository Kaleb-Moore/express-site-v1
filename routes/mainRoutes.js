const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//Handles the routes for the homepage and about section
router.get('/', (req, res, next) => {
    res.locals = projects;
    res.render('index', { projects });
});
router.get('/about', (req, res, next) => {
   res.render('about')
});

//Handles routing for the project section
router.get('/projects/:id', (req, res, next) => {
   const projectId = req.params.id;
   const project = projects.find( ({ id }) => id === +projectId );

   if (project) {
       res.render("project", { project });
   } else {
       const err = new Error("Not Found");
       err.status = 404;
       next(err);
   }
});

module.exports = router;