const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const obtenerUsuario = async (symbol: string) => {
    console.log('API URL:', process.env.EXPO_PUBLIC_API_URL);
  try {
    const response = await fetch(`${apiUrl}/data/price`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symbol }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const fetchedPrice = await response.json();
    console.log('Datos recibidos:', fetchedPrice);

    if (
      fetchedPrice &&
      fetchedPrice.symbol &&
      fetchedPrice.price &&
      fetchedPrice.priceChangePercent
    ) {
      return fetchedPrice;
    } else {
      throw new Error('La respuesta no tiene el formato esperado');
    }
  } catch (error) {
    console.error('Error al obtener datos de moneda:', error);
    throw error;
  }
};

const obtenerDatosGraficos = async (symbol: string, limit: number, interval: string = '1m') => {
  try {
    const response = await fetch(`${apiUrl}/data/graphicdata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symbol, limit, interval }),  // 👈 aquí se envía
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const graphicData = await response.json();
    console.log('Datos de gráfica recibidos:', graphicData);

    if (Array.isArray(graphicData) && graphicData.length > 0 && Array.isArray(graphicData[0])) {
      return graphicData;
    } else {
      throw new Error('La respuesta no tiene el formato esperado');
    }
  } catch (error) {
    console.error('Error al obtener datos de gráfica:', error);
    throw error;
  }
};

const convertirCriptoADivisa = async (
  symbol: string,
  amount: number,
  currency: string
) => {
  try {
    const response = await fetch(`${apiUrl}/data/price_convertion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symbol, amount, currency }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { result } = await response.json();
    console.log(`Conversión recibida: ${amount} ${symbol} = ${result} ${currency}`);
    return result;
  } catch (error) {
    console.error('Error al convertir cripto a divisa:', error);
    throw error;
  }
};



export { obtenerUsuario, obtenerDatosGraficos, convertirCriptoADivisa };
