const db = require('../models');
const Recipe = db.recipe;

exports.getRecipe = (req, res) => {
  const recipeName = req.params.recipeName;
  Recipe.find({ recipeName: recipeName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found recipe with name: ' + recipeName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving recipe with recipeName=' + recipeName,
        error: err
      });
    });
};
