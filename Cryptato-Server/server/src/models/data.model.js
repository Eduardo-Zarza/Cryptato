const { Spot } = require('@binance/connector');
const client = new Spot();

async function getGraphicData(limit = 20) {
    try {
        const symbol = 'BTCUSDT';
        const interval = '1m';
        const validLimit = Number(limit); // Ensure limit is a number

        if (isNaN(validLimit) || validLimit < 1 || validLimit > 1000) {
            throw new Error("Invalid limit value. Must be a number between 1 and 1000.");
        }

        const response = await client.klines(symbol, interval, { limit: validLimit });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

module.exports = getGraphicData;