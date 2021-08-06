import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router} from 'react-router-dom';
import CharacterCard from '../../../components/CharacterCard';

//When you click on the character cards on the homepage, the pathname changes

const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5"
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z"
}

describe("ChangePathname Test", () => {
    it("should change path name according to character id when click character card", async () => {
        configure({adapter: new Adapter()});
        const wrapper = mount(
        <Router>
            <CharacterCard key={character.id} character={character}/>
            </Router>
        );
        expect(wrapper.find('Link').props().to).toEqual(`/characters/${character.id}`);   
    })
})