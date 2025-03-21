const admin = require('../config/firebase-admin');

async function authenticate(limit = 20) {
    try {
        
    } catch (error) {
       
    }
}

async function newUser(email, password) {
    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });

        return {
            uid: userRecord.uid,
            email: userRecord.email,
        };
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}


module.exports = { authenticate, newUser };
