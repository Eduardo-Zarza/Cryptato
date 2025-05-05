
const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config(); // si estás usando CommonJS


// IMPORTANT: ADD YOUR LOCATION TO THE FIREBASE KEY IN THE PC, it is not in repository
const serviceAccountPath = process.env.SERVICE_ACCOUNT_PATH;

if (!serviceAccountPath) {
  throw new Error('SERVICE_ACCOUNT_PATH not set in .env');
}

// Initialiace Firebase with key
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;











