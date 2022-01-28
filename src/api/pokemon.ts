import { API_HOST } from '../utils/constants';

const url = `${API_HOST}/pokemon?limit=20&offset=0`;

export async function getPokemonsApi(endpointUrl: string) {
    try {
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url: string) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}