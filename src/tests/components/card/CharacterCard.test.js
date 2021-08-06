import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../../../components/CharacterCard';
import { BrowserRouter } from 'react-router-dom';

//Renders the character card 

const character = [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}
]

const CharacterMock = () => {
    return (
        <BrowserRouter>
            <CharacterCard key={character.id} character={character}/>
        </BrowserRouter>
    )
}

describe("CharacterCard Test", () => {
    it('should render character card', async () => {
        render( 
            <CharacterMock/>
        );
        const charCard = await screen.findAllByTestId(`character-card-test`);
        expect(charCard).toBeTruthy();
    });
});
