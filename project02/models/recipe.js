module.exports = (mongoose) => {
  const Recipe = mongoose.model(
    'recipes',
    mongoose.Schema({
      recipeName: {
        type: String
      },
      servings: {
        type: Number
      },
      preparationTime: {
        type: String
      },
      ingredients: {
        type: [String]
      },
      steps: {
        type: [String]
      }
    })
  );

  return Recipe;
};
