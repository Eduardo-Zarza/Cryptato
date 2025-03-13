const { Spot } = require('@binance/connector');
const client = new Spot();

async function getGraphicData(limit = 20) {
    try {
        const symbol = 'BTCUSDT';
        const interval = '1m'; // 1-minute interval
        const response = await client.klines(symbol, interval, { limit });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = getGraphicData;