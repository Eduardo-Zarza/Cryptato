
const admin = require('firebase-admin');
const path = require('path');

// IMPORTANT: ADD YOUR LOCATION TO THE FIREBASE KEY IN THE PC, it is not in repository
const serviceAccountPath = path.join('C:', 'Users', 'erick', 'Documents', 'keys', 'serviceAccountKey.json'); 

// Initialiace Firebase with key
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;











