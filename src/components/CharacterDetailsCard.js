import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterDetails({character}){
    return (
        <div className="character-profile">
            <Link to={`/characters/${character.id}`} key={character.id}>
                <img src={character.image} alt="Character image"/>
                <p>{character.name}</p>
            </Link>
            <p><strong>Gender: </strong>{character.gender}</p>
            <p><strong>Status: </strong>{character.status}</p>
            <p><strong>Species: </strong>{character.species}</p>
            <p><strong>Location: </strong>{character.location.name}</p>
        </div>
    );
}