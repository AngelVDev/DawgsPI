import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clear, deleteById, getDetails } from "../redux/actions";

const Details = ({ match }) => {
  const dog = useSelector((state) => state.chocoDetail);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = match.params;
  const handleClick = () => {
    history.push("/home");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteById(id));
    alert(dog.name + " deleted from DB");
    history.push("/home");
  };

  useEffect(() => {
    dispatch(clear());
    dispatch(getDetails(id));
  }, [dispatch, id]);
  console.log(dog.id?.length);
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt="notanimage" />
      <p>Height: {dog.height}</p>
      <p>Weight: {dog.weight}</p>
      <p>Lifespan: {dog.lifespan}</p>
      <p>
        Temperament/s:{" "}
        {dog.id !== Number
          ? dog?.temperaments?.map((t) => (
              <span key={t.name + "id"}>{t.name}</span>
            ))
          : dog?.temperaments?.map((temp) => (
              <span key={temp + "id"}>{temp}</span>
            ))}
      </p>
      {dog.id?.length > 10 ? (
        <button onClick={(e) => handleDelete(e, id)}>Delete</button>
      ) : null}
      <button onClick={handleClick}>Let's go back</button>
    </div>
  );
};

export default Details;
