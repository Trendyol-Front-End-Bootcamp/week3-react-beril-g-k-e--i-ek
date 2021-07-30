import axios from 'axios';

export async function fetchData(status, species, gender) {
    const getFilter = await axios.get(`https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}&species=${species}`);
    return getFilter;
}