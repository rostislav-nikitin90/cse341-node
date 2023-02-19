const db = require('../models');
const Recipe = db.recipe;

module.exports.getRecipe = (req, res) => {
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

module.exports.deleteRecipe = async (req, res) => {
  try {
    const recipeName = req.params.recipeName;
    if (!recipeName) {
      res.status(400).send({ message: 'Invalid Recipe Supplied' });
      return;
    }
    Recipe.deleteOne({ recipeName: recipeName }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the recipe.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the recipe.');
  }
};
