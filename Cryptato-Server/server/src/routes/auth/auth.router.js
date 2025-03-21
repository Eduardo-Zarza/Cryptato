const express = require('express');

const {
    httpAuthenticate,httpNewUser
}= require('./auth.controller');


const authRouter = express.Router();


authRouter.post('/', httpAuthenticate);
authRouter.post('/register', httpNewUser);

module.exports = authRouter;