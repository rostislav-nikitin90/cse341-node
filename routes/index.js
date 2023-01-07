const routes = require('express').Router();
const info = require('../controllers/');

routes.get('/', info.displayData);

module.exports = routes;