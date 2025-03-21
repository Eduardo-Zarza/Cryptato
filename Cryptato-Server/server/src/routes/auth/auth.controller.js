const {authenticate} = require('../../models/auth.model');



async function httpAuthenticate(req, res) {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({ error: 'Token is required' });
        }

        const user = await authenticate(idToken);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
}



module.exports = {
    httpAuthenticate
}