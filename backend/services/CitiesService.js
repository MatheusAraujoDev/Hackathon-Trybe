const CitiesModel = require('../models/CitiesModel');

const getAll = async () => {
  const data = await CitiesModel.getAll();
  return data;
};

const getCityById = async (id) => {
  const product = await CitiesModel.getCityById(id);
  return product;
};

module.exports = {
  getAll,
  getCityById,
};