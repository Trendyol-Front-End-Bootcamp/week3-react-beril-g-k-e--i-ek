import axios from 'axios';

export async function fetchFilterData(status, species, gender) {
    const getFilter = await axios.get(`https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}&species=${species}`);
    return getFilter;
}

export async function fetchCharacterById(characterId) {
    const getCharacter = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    return  getCharacter;
}