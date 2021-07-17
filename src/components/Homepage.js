import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharProfile from "./CharacterDetailsCard";

export default function GetCharactersFromApi() {

    const [characters, setAllCharacters] = useState([]);
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");

    //Api request to return filtered results
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}&species=${species}`)
        .then(response => setAllCharacters(response.data.results))
        .catch(error => {
            console.log(error.message);
        });
    }, [status, species, gender]);
    
    
    return (
        <div>
          <div className="nav-bar "></div>
            <div className="filter-all-buttons">
                {/* Status filter button group */}
                <div className="filter-buttons">
                    <p>Status:</p>
                    <button className="filter-button" onClick={() => setStatus("")}>
                        All
                    </button>
                    <button className="filter-button" onClick={() => setStatus("alive")}>
                        Alive
                    </button>
                    <button className="filter-button" onClick={() => setStatus("dead")}>
                        Dead
                    </button>
                    <button className="filter-button" onClick={() => setStatus("unknown")}>
                        Unknown
                    </button>
                </div>
                {/* Species filter button group */}
                <div className="filter-buttons">
                    <p>Species:</p>
                    <button className="filter-button" onClick={() => setSpecies("")}>
                        All
                    </button>
                    <button className="filter-button" onClick={() => setSpecies("human")}>
                        Human
                    </button>
                    <button className="filter-button" onClick={() => setSpecies("alien")}>
                        Alien
                    </button>
                </div>
                {/* Gender filter button group */}
                <div className="filter-buttons">
                    <p>Gender:</p>
                    <button className="filter-button" onClick={() => setGender("")}>
                        All
                    </button>
                    <button className="filter-button" onClick={() => setGender("male")}>
                        Male
                    </button>
                    <button className="filter-button" onClick={() => setGender("female")}>
                        Female
                    </button>
                    <button className="filter-button" onClick={() => setGender("genderless")}>
                        Genderless
                    </button>
                    <button className="filter-button" onClick={() => setGender("unknown")}>
                        Unknown
                    </button>
                </div>
            </div>
            {/* Mapping the results to the card information to be displayed */}
            {characters.map((character) => {
                return (
                    <CharProfile key={character.id} character={character}></CharProfile>
                );
            })}            
        </div>
    );
}



