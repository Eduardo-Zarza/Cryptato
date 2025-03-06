const { Spot } = require('@binance/connector');
const client = new Spot();

async function getGraphicData() {
  try {
    const symbol = 'BTCUSDT';
    const interval = '1m'; // 1-minute interval to get minute-by-minute data
    const limit = 20; // Get the last 10 minutes of data

    // Fetch Kline (candlestick) data
    const response = await client.klines(symbol, interval, { limit });

     return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports= getGraphicData;
