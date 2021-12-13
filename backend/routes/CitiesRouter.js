const router = require('express').Router();

const CitiesController = require('../controllers/CitiesController');

router.get('/cities', CitiesController.getAll);

router.get('/cities/:id', CitiesController.getCityById);

module.exports = router;
