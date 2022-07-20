import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";
const Landing = () => {
  return (
    <div className="landingBg">
      <div className="landingTextDiv">
        <h1 style={{ fontWeight: "bold" }}>HENRY DOGGOS</h1>
        <h3 style={{ fontWeight: "lighter" }}>
          There's a lot of dogs waitin' for you behind the button below
          <br />
          ¡Come'n get yours!
        </h3>
      </div>
      <button className="landingBtn">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Cabin",
          }}
          to="/home"
        >
          ¡Let's go!
        </Link>
      </button>
    </div>
  );
};

export default Landing;
