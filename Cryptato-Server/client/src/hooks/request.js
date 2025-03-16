const getGraphicData = async (limit = 20) => {
    try {
        const validLimit = Number(limit);
        if (isNaN(validLimit) || validLimit < 1 || validLimit > 1000) {
            throw new Error("Invalid limit value. Must be a number between 1 and 1000.");
        }

        const response = await fetch(`http://localhost:8000/graphicdata?limit=${validLimit}`);
        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Unexpected data format");
        }

        return {
            x: data.map(entry => new Date(entry[0])),
            open: data.map(entry => parseFloat(entry[1])),
            high: data.map(entry => parseFloat(entry[2])),
            low: data.map(entry => parseFloat(entry[3])),
            close: data.map(entry => parseFloat(entry[4])),
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default getGraphicData;