export const API_ROOT = 'https://swapi.dev/api/planets/';

export const planetByNumber = (planetNumber: number) => `${API_ROOT + planetNumber}/`;
