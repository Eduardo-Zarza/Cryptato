
const express = require('express');

const cors = require('cors');



const dataRouter = require('./routes/data/data.router');
const authRouter = require('./routes/auth/auth.router');


const app = express();


//CORS middleware to handle frontend requests
app.use(cors({
    origin:'http://localhost:8081',
}));
 
app.use(express.json()); // Allow  JSON requests middleware


//mounting routes
app.use('/data',dataRouter); 
app.use('/auth',authRouter); 



module.exports = app;

