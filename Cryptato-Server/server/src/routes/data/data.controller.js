const { getGraphicData, getData,getPrice } = require('../../models/data.model');



async function httpGetGraphicData(req, res){
    const symbol= req.body.symbol
    const limit = req.body.limit
    const interval=req.body.interval
    try {
        const data = await getGraphicData(limit,symbol,interval); // Await the async function
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

async function httpGetPrice(req, res) {
    const { symbol = 'BTC', amount = 1, currency = 'USD' } = req.body;
  
    if (!symbol || !currency || isNaN(amount)) {
      return res.status(400).json({ error: 'Parámetros inválidos. Se requiere: symbol, amount (número), currency.' });
    }
  
    try {
      const result = await getPrice(symbol, parseFloat(amount), currency); // ✅ Aquí está la corrección
      return res.status(200).json({ result });
    } catch (error) {
      console.error('Error fetching price conversion:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
}
  


module.exports = {
    httpGetGraphicData, httpGetData, httpGetPrice
}