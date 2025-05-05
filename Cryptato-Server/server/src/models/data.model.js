const { Spot } = require('@binance/connector');
const client = new Spot();

async function getGraphicData(limit = 20, symbol = 'BTCUSDT') {
    try {
        
        const interval = '1m'; //could add it as a parameter
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

//ETHUSDT: Ethereum , BNBUSDT: Binance Coin, ADAUSDT: Cardano, SOLUSDT: Solana​

async function getData(symbol = 'BTCUSDT') {
    try {
        
        // Fetch the 24-hour ticker price change statistics
        const response = await client.ticker24hr(symbol);
        
        // Extract relevant data
        const price = parseFloat(response.data.lastPrice); // Current price
        const priceChangePercent = parseFloat(response.data.priceChangePercent); // 24h variation

        return {
            symbol,
            price,
            priceChangePercent
        };
    } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error.message);
        throw error;
    }
}

module.exports = { getGraphicData, getData };
