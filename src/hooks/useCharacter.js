import { useState, useEffect } from 'react';

const getCharacters = async (setCharacters, url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results);
    } catch (error) {
        console.log(error);
    }
}

const useCharacters = (url) => {
    const [character, setCharacters] = useState([]);
    useEffect(() => 
        getCharacters(setCharacters,url)
    , [url]);
    return character;
};

export default useCharacters;