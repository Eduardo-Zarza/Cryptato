
const express = require('express');

const morgan = require('morgan'); 

const cors = require('cors');



const dataRouter = require('./routes/data/data.router');
const authRouter = require('./routes/auth/auth.router');


const app = express();

app.use(express.json()); // Allow  JSON requests middleware
// Morgan middleware for loggin requests
app.use(morgan('dev')); 
 

//CORS middleware to handle frontend requests
app.use(cors({
    origin:['http://localhost:8081',process.env.FRONTEND_URL], //change server's .env file to your front end IP
}));





//mounting routes
app.use('/data',dataRouter); 
app.use('/auth',authRouter); 



module.exports = app;

