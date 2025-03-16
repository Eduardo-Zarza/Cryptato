const express = require('express');
const getGraphicData = require('../../models/graphicdata.model'); // Direct import from models

const graphicdataRouter = express.Router();

graphicdataRouter.get('/graphicdata', async (req, res) => {
    let limit = parseInt(req.query.limit, 10);

    if (isNaN(limit) || limit < 1 || limit > 1000) {
        limit = 20; // Default to 20 if invalid
    }

    try {
        const data = await getGraphicData(limit);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
});

module.exports = graphicdataRouter;