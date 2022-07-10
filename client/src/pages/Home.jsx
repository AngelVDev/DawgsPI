import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Pagination />
    </div>
  );
};

export default Home;
