const router = require('express').Router();

const EventsController = require('../controllers/EventsController');

router.get('/events', EventsController.getAll);

module.exports = router;