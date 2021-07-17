import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let rickandmorty_url = "https://rickandmortyapi.com/api/character/";

function CharacterProfilePage(props) {


  let { id } = useParams();

  const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(rickandmorty_url + id)
        .then(response => setCharacter(response.data))
        .catch(error => {
            throw new Error(error.message);
        });
    }, [id]);

    return (
        <div>
            <div className="nav-bar"></div>
            <div className="character-profile">
              {console.log(character)}
              <img src={character.image} alt="Character image" />
              <p><strong>Name: </strong> {character.name}</p>
              <p><strong>Status: </strong> {character.status}</p>
              <p><strong>Species: </strong> {character.species}</p>
              <p><strong>Gender: </strong> {character.gender}</p>
              <p><strong>Location: </strong> {character.location?.name}</p>
              <p><strong>Latest 5 episodes: </strong></p>
              <p>{character.episode?.[character.episode?.length - 1 ]}</p>
              <p>{character.episode?.[character.episode?.length - 2 ]}</p>
              <p>{character.episode?.[character.episode?.length - 3 ]}</p>
              <p>{character.episode?.[character.episode?.length - 4 ]}</p>
              <p>{character.episode?.[character.episode?.length - 5 ]}</p>
            </div>
            <Link to='/'> Return to main page</Link>
        </div>
    );
}

export default CharacterProfilePage;