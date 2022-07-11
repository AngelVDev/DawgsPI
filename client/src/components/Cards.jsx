import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions";

const Cards = () => {
  const dogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  if (dogs) {
    return (
      <div>
        {dogs.map((d) => (
          <div key={d.id}>
            <h1>
              <Link to={"/details/" + d.id}>{d.name}</Link>
            </h1>
            <p>{d?.temperament}</p>
            <h2>
              ✨: {d.id !== 179 && d.id !== 232 ? d.weight : "Unknown weight"}
            </h2>
            <img src={d?.image} preload="true" alt="cardimgerror" />
          </div>
        ))}
      </div>
    );
  } else {
    return <div>LOADER DEL GOBIERNO</div>;
  }
};
export default Cards;
