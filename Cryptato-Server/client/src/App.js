import React from 'react';
import useGraphicData from './hooks/usegraphicdata';
import Chart from './components/chart';

const App = () => {
    const { chartData, loading, error, loadMoreData } = useGraphicData();

    return (
        <div>
            <Chart chartData={chartData} loading={loading} error={error} loadMoreData={loadMoreData} />
        </div>
    );
};

export default App;