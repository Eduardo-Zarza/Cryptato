const express = require('express');
const { httpGetGraphicData, } = require('./graphicdata.controller');

const graphicdataRouter = express.Router();

graphicdataRouter.get('/graphicdata', httpGetGraphicData);

module.exports = graphicdataRouter;