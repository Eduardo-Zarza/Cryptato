import { API_URL } from '@env';

const apiUrl = API_URL; // change to your COMPUTER'S IP

const obtenerUsuario = async (symbol: string) => {
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
  
  export default obtenerUsuario;
  
