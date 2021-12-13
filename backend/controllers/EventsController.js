const EventsService = require('../services/EventsService');

const getAll = async (_req, res) => {
  try {
    const data = await EventsService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
};