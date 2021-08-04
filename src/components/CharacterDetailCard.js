import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackHomeButton from './BackHomeButton';
import { fetchCharacterById } from "../services/API";

function CharacterDetailCard() {
    //Id of selected character
    let { id } = useParams();

    const [character, setCharacter] = useState({});

    //Api request to return single character
    useEffect(() => {
        fetchCharacterById(id)
        .then(response => setCharacter(response.data))
        .catch(error => {
            throw new Error(error.message);
        });
    }, [id]);

    return (
        <div>
            {/* Character profile card detailed information */}
            <div className="nav-bar"></div>
            <div className="character-profile" data-testid="character-detail-test">
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
            <BackHomeButton />
        </div>
    );
}

export default CharacterDetailCard;