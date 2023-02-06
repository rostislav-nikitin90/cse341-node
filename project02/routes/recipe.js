const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipe');

router.get('/:recipeName', recipeController.getRecipe);

module.exports = router;
