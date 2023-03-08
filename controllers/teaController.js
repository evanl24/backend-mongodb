exports.homePage = async (req, res) => {
  const teas = ['Green', 'Black', 'White', 'Oolong'];
  
  try {
    res.json(teas);  
  } catch (error) {
    console.log(error);
  }
};