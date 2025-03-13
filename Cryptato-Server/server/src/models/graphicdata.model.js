const express = require('express');
const { httpGetGraphicData } = require('../controllers/graphicdata.controller');

const graphicdataRouter = express.Router();

graphicdataRouter.get('/graphicdata', async (req, res) => {
    const limit = parseInt(req.query.limit) || 20; // Default to 20 if not provided
    try {
        const data = await httpGetGraphicData(limit);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
});

module.exports = graphicdataRouter;