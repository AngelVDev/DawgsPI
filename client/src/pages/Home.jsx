import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Loader from "../components/Loader";
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
  if (dogs) {
    return (
      <div
        style={{
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          background: "#FEFAE0",
        }}
      >
        <Header setCurrentPage={setCurrentPage} />
        <Cards currentDogs={currentDogs} />
        <Pagination
          dogs={dogs}
          dogsPerPage={dogsPerPage}
          pagination={pagination}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Home;
