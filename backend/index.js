const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const CitiesRouter = require('./routes/CitiesRouter');
const EventsRouter = require('./routes/EventsRouter');


const PORT = 3001

app.use(bodyParser.json());

app.use('/', CitiesRouter);
app.use('/', EventsRouter);

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}!`));
