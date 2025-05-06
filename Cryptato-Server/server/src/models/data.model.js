const { Spot } = require('@binance/connector');
const client = new Spot();
const axios = require('axios');

async function getGraphicData(limit = 20, symbol = 'BTCUSDT', interval = '1m') {
    try {
      const validLimit = Number(limit);
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



async function getPrice(symbol = 'BTC', amount = 1, currency = 'USD') {
  try {
    // Paso 1: Obtener el precio de la cripto en USD desde Binance
    const pair = `${symbol}USDT`; // Asumimos que USDT ≈ USD
    const response = await client.tickerPrice(pair);
    const priceInUSD = parseFloat(response.data.price) * amount;

    // Paso 2: Si la divisa es USD, devolver directamente
    if (currency === 'USD') {
      return priceInUSD;
    }

    // Paso 3: Si no, convertir el precio USD a otra divisa con Frankfurter
    const fxResponse = await axios.get(`https://api.frankfurter.app/latest`, {
      params: {
        amount: priceInUSD,
        from: 'USD',
        to: currency,
      },
    });

    return fxResponse.data.rates[currency];
  } catch (error) {
    console.error('Error in getPrice:', error.message);
    throw new Error('Failed to get price in requested currency');
  }
}





module.exports = { getGraphicData, getData, getPrice };
