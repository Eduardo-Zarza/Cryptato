import { useEffect, useState } from 'react';
import { obtenerDatosGraficos } from '../hooks/request';

export function useGraphicData(symbol: string, limit: number) {
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await obtenerDatosGraficos(symbol, limit);

        // Validación de datos
        if (!Array.isArray(rawData) || rawData.length === 0) {
          throw new Error('Datos vacíos o mal formateados');
        }

        const values: number[] = [];
        const times: string[] = [];

        for (const point of rawData) {
          const closePrice = parseFloat(point[4]);
          const timestamp = point[0];

          if (isFinite(closePrice) && !isNaN(closePrice)) {
            values.push(closePrice);
            times.push(
              new Date(timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })
            );
          }
        }

        if (values.length === 0 || times.length === 0) {
          throw new Error('No hay datos válidos');
        }

        setData(values);
        setLabels(times);
      } catch (error) {
        console.error('Error al obtener o procesar datos de gráfica:', error);

        // Asignar valores seguros por defecto
        const fallbackLength = 5;
        setData(new Array(fallbackLength).fill(0));
        setLabels(new Array(fallbackLength).fill(''));
      }
    };

    fetchData();
  }, [symbol, limit]);

  return { data, labels };
}
