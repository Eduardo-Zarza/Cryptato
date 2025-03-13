import { useEffect, useState } from 'react';
import getGraphicData from '../hooks/request';

const useGraphicData = () => {
    const [chartData, setChartData] = useState({ x: [], open: [], high: [], low: [], close: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(20); // Start with 20 candles

    const fetchData = async (newLimit) => {
        try {
            const data = await getGraphicData(newLimit); // Fetch with new limit
            setChartData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(limit);
    }, [limit]); // Refetch when limit changes

    // Function to load more data
    const loadMoreData = () => {
        setLimit(prevLimit => prevLimit + 20); // Increase limit by 20
        setLoading(true);
    };

    return { chartData, loading, error, loadMoreData };
};

export default useGraphicData;