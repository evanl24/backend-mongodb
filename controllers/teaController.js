exports.middlewareTest = (req, res, next) => {
  req.name = 'test';
  next();
}

exports.homePage = async (req, res) => {
  const teas = ['Green', 'Black', 'White', 'Oolong'];
  
  try {
    console.log(req.name);
    res.json(teas);  
  } catch (error) {
    console.log(error);
  }
};

exports.authMiddleware = async (req, res, next) => {
  try {
    if (req.body.user) {
      next();
    } else  {
      res.json('Sign in to continue');
    }
  } catch (error) {
    console.log(error);
  }
}

exports.authPage = async (req, res, next) => {
  try {
    res.json(req.body.user);

  } catch (error) {
    console.log(error);
  }
}