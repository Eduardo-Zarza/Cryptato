const getGraphicData = require('../models/graphicdata.model');

async function httpGetGraphicData(limit) {
    try {
        return await getGraphicData(limit);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    httpGetGraphicData
};