const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')

const CitiesRouter = require('./routes/CitiesRouter');
const EventsRouter = require('./routes/EventsRouter');


const PORT = 3001

app.use(bodyParser.json());
app.use(cors());

app.use('/', CitiesRouter);
app.use('/', EventsRouter);

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}!`));

module.exports = app;
