/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions";
import "../styles/components.css";

const Cards = () => {
  const dogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs?.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  if (dogs) {
    return (
      <>
        {currentDogs?.map((d) => (
          <div className="card" key={d.id}>
            <h1>
              <Link
                style={{ textDecoration: "none", color: "#DDA15E" }}
                to={"/details/" + d.id}
              >
                {d.name}
              </Link>
            </h1>
            <div className="infoCard">
              <p>{d?.temperament}</p>
              <h2>
                ✨: {d.id !== 179 && d.id !== 232 ? d.weight : "Unknown weight"}
              </h2>
            </div>
            <img src={d?.image} preload="true" alt="cardimgerror" />
          </div>
        ))}
      </>
    );
  } else {
    return <div>LOADER DEL GOBIERNO</div>;
  }
};
export default Cards;
