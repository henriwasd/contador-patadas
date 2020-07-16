const express = require('express');
const TempoController = require('./controllers/TempoController');

const routes = express.Router();

routes.get('/tempo', TempoController.index);
routes.post('/tempo', TempoController.store);

module.exports = routes;
