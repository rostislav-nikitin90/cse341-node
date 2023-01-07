displayData = (req, res) => {
    const data =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayData,
  };