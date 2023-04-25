const tea = require("../models/teas");

exports.homePage = async (req, res) => {
  const teas = ['Green', 'Black', 'White', 'Oolong'];
  
  try {
    console.log(req.name);
    res.json(teas);  
  } catch (error) {
    console.log(error);
  }
};

exports.createTea = async (req, res) => {
  try {
    const tea = new Tea(req.body);
    await tea.save();
  } catch (error) {
    res.status(500).json(error);
  };
};
