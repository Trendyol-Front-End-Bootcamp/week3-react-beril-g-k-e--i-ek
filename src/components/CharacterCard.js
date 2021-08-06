import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({character}){
    return (
        //Character card information displayed on the main page
        <Link to={`/characters/${character.id}`} key={character.id} data-testid="character-card-test">
        <div id="character-card" className="character-profile">
                <img src={character.image} alt="Character"/>
                <p>{character.name}</p>
            <p><strong>Gender: </strong>{character.gender}</p>
            <p><strong>Status: </strong>{character.status}</p>
            <p><strong>Species: </strong>{character.species}</p>
            <p><strong>Location: </strong>{character.location?.name}</p>
        </div>
        </Link>
    );
}