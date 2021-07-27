import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import useCharacters from '../hooks/useCharacter';
import '../assets/styles/components/Characters.scss';

import Search from './Search';

const initialState = {
    favorites: [],
}

const API = 'https://rickandmortyapi.com/api/character';

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites.filter(item => item.id !== action.payload.id),
                            action.payload],
            };
        default:
            return state;
    }
}

const Characters = () => {
    //const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);
    /*const getCharacters = async () => {
        try {            
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const data = await res.json();
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    }*/

    /*useEffect(() => {
        getCharacters();
    }, []);*/

    const handleClick = (elem) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: elem });
    }
    
    // HANDLE SEARCH -------------------------
    //utilizando useCallback
    const handleSearch = useCallback(
        () => {
            setSearch(searchInput.current.value);
        },
        [],
    );


    //utilizando useRef
    //const handleSearch = () => {
    //    setSearch(searchInput.current.value);
    //}


    //const handleSearch = (e) => {
     //   setSearch(e.target.value);
    //}

    // END HANDLE SEARCH --------------------------


    // utilizando useMemo (memoizacion)
    const  filteredUsers = useMemo(() =>
        characters.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    ,[characters, search]);
/*    const filteredUsers = characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });*/


    return (
        <div className="Characters">
            <div className="Characters__favorites">
                {favorites.favorites.length > 0 && (<h4>Favoritos: </h4>)}
                {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {favorite.name}
                    </li>
                ))}
            </div>

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

            <div className="Characters__container">
                {filteredUsers.map((item) => (
                    <div className="Card__container" key={item.id}>
                        <div className="Card__basic-info">
                            <img src={item.image} alt={item.name} />
                            <h2 key={item.id}>{item.name}</h2>
                        </div>
                        <div className="Card__more-info">
                            <p><strong>Status: </strong><span>{item.status}</span></p>
                            <p><strong>Gender: </strong><span>{item.gender}</span></p>
                            <p><strong>Specie: </strong><span>{item.species}</span></p>
                            <p><strong>Origin: </strong><span>{item.origin.name}</span></p>
                            <button type="button" onClick={() => handleClick(item)}>
                                Agregar a favoritos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters;