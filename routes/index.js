const express = require('express');
const router = new express.Router();
const teaController = require('../controllers/teaController');

router.get('/', teaController.middlewareTest, teaController.homePage);
router.get('/auth', teaController.authMiddleware, teaController.authPage);

module.exports = router;


