const admin = require('../config/firebase-admin');

async function authenticate(idToken) {
    try {
        // Verifies token sent by client
        const decodedToken = await admin.auth().verifyIdToken(idToken);

        return {
            uid: decodedToken.uid,
            email: decodedToken.email
        };
    } catch (error) {
        throw new Error(`Authentication failed: ${error.message}`);
    }
}




module.exports = { authenticate};
