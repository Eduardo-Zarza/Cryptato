import { useState, useEffect } from 'react';
import obtenerUsuario from '../hooks/request'; 

interface SymbolData {
  symbol: string;
  price: string;
  priceChangePercent: string;
}  
const useData = (symbol: string) => {
    const [data, setData] = useState<SymbolData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const result = await obtenerUsuario(symbol);
          if (result) {
            setData({
              ...result,
              price: result.price.toString(),  // Asegúrate de que el precio sea un string
              priceChangePercent: result.priceChangePercent.toString(),  // También puedes convertir el cambio de precio a string si es necesario
            });
          }
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [symbol]);
  
    return { data, loading, error };
  };
  

export default useData;
