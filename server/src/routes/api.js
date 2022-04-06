const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

const api = express.Router();

// Middleware for the 'planets' router
api.use('/planets', planetsRouter);

// Middleware for the 'launches' router
api.use('/launches', launchesRouter);


module.exports = api;