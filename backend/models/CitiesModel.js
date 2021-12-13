const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  try {
    const db = await connection();
    const data = db.collection('cities').find().toArray();
    return data;
  } catch (error) {
    return error.message;
  }
};

const getCityById = async (id) => {
  try {
    const db = await connection();
    const data = await db.collection('cities').findOne(
      { _id: ObjectId(id) },
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAll,
  getCityById,
};
