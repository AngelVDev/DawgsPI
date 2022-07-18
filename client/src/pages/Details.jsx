import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clear, deleteById, getDetails } from "../redux/actions";

const Details = ({ match }) => {
  const dog = useSelector((state) => state.chocoDetail);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = match.params;
  const regex = new RegExp("[a-z]");
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
        {regex.test(dog.id) === true
          ? dog?.temperaments?.map((t) => (
              <span className="temp" key={t.name + "id"}>
                {t.name}
              </span>
            ))
          : dog?.temperaments?.map((temp) => (
              <span className="temp" key={temp + "id"}>
                {temp}
              </span>
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
