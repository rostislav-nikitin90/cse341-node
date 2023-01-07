displayData = (req, res) => {
    const data =
      'Ivana Novakovic';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayData,
  };