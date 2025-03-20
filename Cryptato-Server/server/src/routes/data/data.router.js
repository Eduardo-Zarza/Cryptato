const express = require('express');

const {
    httpGetGraphicData,httpGetData,
}= require('./data.controller');


const dataRouter = express.Router();

dataRouter.get('/graphicdata', httpGetGraphicData);

dataRouter.post('/price', httpGetData);

module.exports = dataRouter;