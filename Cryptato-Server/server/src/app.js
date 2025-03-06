
const express = require('express');

const cors = require('cors');


const graphicdataRouter= require('./routes/graphicdata/graphicdata.router');


const app = express();


app.use(cors()); // Habilitar CORS para evitar bloqueos en el frontend
app.use(express.json()); // Permitir solicitudes con JSON
app.use(graphicdataRouter);



module.exports = app;

