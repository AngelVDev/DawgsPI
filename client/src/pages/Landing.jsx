import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      Landing
      <button>
        <Link to="/home">TO HOME</Link>
      </button>
    </div>
  );
};

export default Landing;
