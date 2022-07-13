import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
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
      }}
    >
      <Header />
      <Cards />
      <Pagination />
    </div>
  );
};

export default Home;
