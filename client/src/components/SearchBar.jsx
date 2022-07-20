import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQDogs } from "../redux/actions";

const SearchBar = () => {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    dispatch(getQDogs(name));
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQDogs(name));
  };
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Breed name..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="searchButton"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        CALL
      </button>
    </div>
  );
};

export default SearchBar;
