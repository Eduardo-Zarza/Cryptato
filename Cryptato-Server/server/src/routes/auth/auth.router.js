const express = require('express');

const {
    httpAuthenticate,httpNewUser
}= require('./auth.controller');


const authRouter = express.Router();


authRouter.post('/login', httpAuthenticate);


module.exports = authRouter;