const express = require('express');
const router = new express.Router();
const teaController = require('../controllers/teaController');

router.get('/', teaController.homePage);
router.post("/add", teaController.createTea);

module.exports = router;


