const getGraphicData = require('../../models/graphicdata.model');


async function httpGetGraphicData(req, res){
    try {
        const data = await getGraphicData(); // Esperamos la promesa
        res.status(200).json(data); // Devolvemos los datos obtenidos
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos de Binance', details: error.message });
    }
}

module.exports={
    httpGetGraphicData
}