const BASE_URL = 'http://192.168.1.17:8000/planets';

export const fetchPlanets = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Error fetching planets');
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const addPlanet = async (planetData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(planetData),
        });
        if (!response.ok) throw new Error('Error adding planet');
        return await response.json();
    } catch (error) {
        throw error;
    }
};



export const updatePlanet = async (planetId, planetData) => {
    try {
        const response = await fetch(`${BASE_URL}/${planetId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(planetData),
        });
        if (!response.ok) throw new Error('Error updating planet');
        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const deletePlanet = async (planetId) => {
    try {
        const response = await fetch(`${BASE_URL}/${planetId}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error deleting planet');
        return await response.json();
    } catch (error) {
        throw error;
    }
};


