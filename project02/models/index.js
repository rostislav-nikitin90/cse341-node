const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.recipe = require('./recipe.js')(mongoose);
db.user = require('./user.js')(mongoose);

module.exports = db;
