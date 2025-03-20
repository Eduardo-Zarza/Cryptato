
const express = require('express');

const cors = require('cors');



const dataRouter = require('./routes/data/data.router');


const app = express();


app.use(cors()); // Habilitar CORS para evitar bloqueos en el frontend
app.use(express.json()); // Permitir solicitudes con JSON

//mounting routes

app.use('/data',dataRouter); 



module.exports = app;

