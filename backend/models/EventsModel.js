const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  try {
    const db = await connection();
    const data = db.collection('events').find().toArray();
    return data;
  } catch (error) {
    return error.message;
  }
};


module.exports = {
  getAll,
};
