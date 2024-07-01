import React from "react";
import searchBarIcon from "../../assets/icons/searchBarIcon.svg";

const SearchBar = () => {
  const [query, setQuery] = React.useState("");

  console.log(query);
  return (
    <div className="searchBarWrapper">
      <input
        className="searchBar"
        type="text"
        placeholder="O que você está buscando?"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button className="searchButton">
        <img src={searchBarIcon} alt="Ícone de lupa para pesquis" />
      </button>
    </div>
  );
};

export default SearchBar;
