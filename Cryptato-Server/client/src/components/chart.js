import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ chartData, loading, error, loadMoreData }) => {
    return (
        <div>
            <h2>BTC/USDT Candlestick Chart</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <Plot
                        data={[
                            {
                                x: chartData.x,
                                open: chartData.open,
                                high: chartData.high,
                                low: chartData.low,
                                close: chartData.close,
                                type: 'candlestick',
                            }
                        ]}
                        layout={{
                            title: 'BTC/USDT Candlestick Chart',
                            xaxis: { title: 'Time', type: 'date' },
                            yaxis: { title: 'Price (USDT)' }
                        }}
                        style={{ width: '100%', height: '500px' }}
                    />
                    <button onClick={loadMoreData} style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>
                        Load More Data
                    </button>
                </>
            )}
        </div>
    );
};

export default Chart;