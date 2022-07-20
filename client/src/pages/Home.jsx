import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
  const dogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs?.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefae0",
        height: "100%",
      }}
    >
      <Header />
      <Cards currentDogs={currentDogs} />
      <Pagination
        dogs={dogs}
        dogsPerPage={dogsPerPage}
        pagination={pagination}
      />
    </div>
  );
};

export default Home;
