import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  filterByTemps,
  getTemps,
  getDogs,
  orderByName,
  orderByWeight,
  showCreated,
} from "../redux/actions";

const Header = ({ setCurrentPage }) => {
  const temps = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const handleOrderName = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByName(e.target.value));
  };
  const handleOrderWeight = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByWeight(e.target.value));
  };
  const handleFilterTemps = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByTemps(e.target.value));
  };
  const handleFilterSrc = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(showCreated(e.target.value));
  };
  const handleReset = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getDogs());
  };
  useEffect(() => {
    dispatch(getTemps());
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="filterContainer">
      <button className="create">
        <Link style={{ textDecoration: "none", color: "#FEFAE0" }} to="/create">
          {" "}
          Create a doge
        </Link>
      </button>
      <SearchBar />
      <button className="reset" onClick={(e) => handleReset(e)}>
        RESET
      </button>
      <label className="headerLabel">
        Sort by name
        <select className="headerSelect" onChange={(e) => handleOrderName(e)}>
          <option value="">-</option>
          <option value="ASC">A to Z</option>
          <option value="DSC">Z to A</option>
        </select>
      </label>
      <label className="headerLabel">
        Sort by weight
        <select className="headerSelect" onChange={(e) => handleOrderWeight(e)}>
          <option value="">-</option>
          <option value="Low">Low to hi</option>
          <option value="High">Hi to low</option>
        </select>
      </label>
      <label className="headerLabel">
        Filter by temperament
        <select className="headerSelect" onChange={(e) => handleFilterTemps(e)}>
          <option value="ALL">All</option>
          {temps &&
            temps?.map((temp) => {
              return <option key={temp.id}>{temp.name}</option>;
            })}
        </select>
      </label>
      <label className="headerLabel">
        Filter by source
        <select className="headerSelect" onChange={(e) => handleFilterSrc(e)}>
          <option value="MIX">Mixed</option>
          <option value="API">API</option>
          <option value="DB">Createds</option>
        </select>
      </label>
    </div>
  );
};

export default Header;
