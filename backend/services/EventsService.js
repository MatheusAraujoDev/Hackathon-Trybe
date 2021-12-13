const EventsModel = require('../models/EventsModel');

const getAll = async () => {
  const data = await EventsModel.getAll();
  return data;
};

module.exports = {
  getAll,
};