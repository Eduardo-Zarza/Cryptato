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

const obtenerDatosGraficos = async (symbol: string, limit: number) => {
  
  try {
    const response = await fetch(`${apiUrl}/data/graphicdata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symbol, limit }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const graphicData = await response.json();
    console.log('Datos de gráfica recibidos:', graphicData);

    // Verifica que sea un array de arrays con al menos un dato
    if (Array.isArray(graphicData) && graphicData.length > 0 && Array.isArray(graphicData[0])) {
      return graphicData; // Devuelve los datos crudos para graficar
    } else {
      throw new Error('La respuesta no tiene el formato esperado');
    }
  } catch (error) {
    console.error('Error al obtener datos de gráfica:', error);
    throw error;
  }
};


export { obtenerUsuario, obtenerDatosGraficos };
