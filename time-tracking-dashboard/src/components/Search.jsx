import React from "react";

const Search = ({ filterWord, setFilterWord }) => {
    return (
        <div>
            <p>Search</p>
            <input
                type="text"
                placeholder="search by project name"
                value={filterWord}
                onChange={(e) => setFilterWord(e.target.value)}
            />
        </div>
    );
};

export default Search;
