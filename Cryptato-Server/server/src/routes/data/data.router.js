const express = require('express');

const {
    httpGetGraphicData,
}= require('./data.controller');


const dataRouter = express.Router();

dataRouter.get('/', httpGetGraphicData);

module.exports = dataRouter;