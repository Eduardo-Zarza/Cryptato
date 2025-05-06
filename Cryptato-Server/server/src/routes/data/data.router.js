const express = require('express');

const {
    httpGetGraphicData,httpGetData,httpGetPrice
}= require('./data.controller');


const dataRouter = express.Router();

dataRouter.post('/graphicdata', httpGetGraphicData);

dataRouter.post('/price', httpGetData);

dataRouter.post('/price_convertion', httpGetPrice);

module.exports = dataRouter;