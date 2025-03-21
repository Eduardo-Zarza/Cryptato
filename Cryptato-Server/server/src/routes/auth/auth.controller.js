const {authenticate,newUser} = require('../../models/auth.model');



async function httpAuthenticate(req, res){
    try {
        
    } catch (error) {
       
    }
}


async function httpNewUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await newUser(email, password);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



module.exports = {
    httpAuthenticate,httpNewUser
}