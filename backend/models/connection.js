// Arquivo responsável pela conexão com o MongoDb.
const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

function connection() {
  return db
  ? Promise.resolve(db)
  : MongoClient.connect(process.env.DB_CONNECTION, OPTIONS)
  .then((conn) => {
  db = conn.db('HackathonGrupo5');
    return db;
  });
}

module.exports = connection;