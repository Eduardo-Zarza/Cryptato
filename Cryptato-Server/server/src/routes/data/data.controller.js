const { getGraphicData, getData } = require('../../models/data.model');



async function httpGetGraphicData(req, res){
    try {
        const data = await getGraphicData(); // Await the async function
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching graphic data:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

//return day data from crypto
async function httpGetData(req, res){
    const symbol= req.body.symbol
    try {
        const data = await getData(symbol); // TODO: add coin symbol in arguments to getData
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching graphic data:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    httpGetGraphicData, httpGetData
}