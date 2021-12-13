// Arquivo responsável pela conexão com o MongoDb.
const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

process.env.DB_CONNECTION = 'mongodb+srv://Alice:malry123@cluster0.kry2p.mongodb.net/test'
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