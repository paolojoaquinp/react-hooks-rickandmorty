import React from 'react'
import '../assets/styles/components/Search.scss';

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search">
            <input type="text" placeholder="Busca un personaje...." value={search} ref={searchInput} onChange={handleSearch} />
        </div>
    )
}

export default Search
