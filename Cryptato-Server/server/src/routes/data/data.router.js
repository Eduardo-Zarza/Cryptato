const express = require('express');

const {
    httpGetGraphicData,httpGetData,
}= require('./data.controller');


const dataRouter = express.Router();

dataRouter.get('/graphicdata', httpGetGraphicData);

dataRouter.get('/price', httpGetData);

module.exports = dataRouter;