const CitiesService = require('../services/CitiesService');

const getAll = async (_req, res) => {
  try {
    const data = await CitiesService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

const getCityById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CitiesService.getCityById(id);

    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
  getCityById,
};
