import React from 'react';
import Plot from 'react-plotly.js';

const App = () => {
    return (
        <div>
            <h2>      BTC/USDT Candlestick Chart</h2>
            <Plot
                data={[
                    {
                        x: [], // Empty x-axis (time)
                        open: [],
                        high: [],
                        low: [],
                        close: [],
                        type: 'candlestick',
                    }
                ]}
                layout={{
                    title: 'BTC/USDT Candlestick Chart',
                    xaxis: { type: 'date', title: 'Time' },
                    yaxis: { title: 'Price (USDT)' }
                }}
                style={{ width: '100%', height: '500px' }}
            />
        </div>
    );
};

export default App;