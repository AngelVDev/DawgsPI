import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createDog, getTemps } from "../redux/actions";

function isImage(url) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function validateForms(input) {
  let error = {};
  if (input.name.length < 1) {
    error.name = "Name required";
  }
  if (input.height <= 0) {
    error.height = "Height above zero, please";
  }
  if (input.weight <= 0) {
    error.weight = "Weight above zero, please";
  }
  // if (input.lifespan <= 0) {
  //   error.lifespan = "Lifespan above zero, please";
  // }
  // if (isImage(input.image) === false) {
  //   error.image =
  //     "Format your image to something more friendly, then come back";
  // }
  // if (input.temperaments.length <= 0) {
  //   error.temperaments = "Select at least one temperament";
  // }
  return error;
}

const Creator = () => {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.temperaments);
  const history = useHistory();
  let [error, setError] = useState({});
  let [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    lifespan: "",
    image: "",
    temperaments: [],
  });
  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validateForms({ ...input, [e.target.name]: e.target.value }));
  };
  const handleSelect = (e) => {
    setInput({
      ...input,
      temperaments: [...input.temperaments, e.target.value],
    });
  };
  const handleDelete = (e) => {
    setInput({
      ...input,
      temperaments: input.temperaments.filter((t) => t !== e),
    });
  };

  const handleClick = () => {
    history.push("/home");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDog(input));
    alert("The dog is safe at home, check it yourself");
    setInput({
      name: "",
      height: "",
      weight: "",
      lifespan: "",
      image: "",
      temperaments: [],
    });
  };
  if (temps) {
    return (
      <div>
        <h1>Doggo creation</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            NAME
            <input onChange={(e) => handleChange(e)} name="name" type="text" />
            {error.name && <p className="error">{error.name} </p>}
          </label>
          <label>
            HEIGHT
            <input
              onChange={(e) => handleChange(e)}
              name="height"
              type="number"
            />
            {error.height && <p className="error">{error.height} </p>}
          </label>
          <label>
            WEIGHT
            <input
              onChange={(e) => handleChange(e)}
              name="weight"
              type="number"
            />
            {error.weight && <p className="error">{error.weight} </p>}
          </label>
          <label>
            LIFESPAN
            <input onChange={(e) => handleChange(e)} type="text" />
            {error.lifespan && <p className="error">{error.lifespan} </p>}
          </label>
          <label>
            IMAGE
            <input onChange={(e) => handleChange(e)} type="text" />
            {error.image && <p className="error">{error.image} </p>}
          </label>
          <label>
            TEMPERAMENT
            <select
              name="temperaments"
              onChange={(e) => handleSelect(e)}
              id="tempSelection"
            >
              <option value="">-</option>
              {temps?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
            {error.temperaments && (
              <p className="error">{error.temperaments} </p>
            )}
          </label>
          <button
            onClick={handleClick}
            disabled={Object.keys(error).length}
            type="submit"
          >
            SEND IT TO HOME
          </button>
        </form>
        {input.temperaments.length > 0 && (
          <div key="selectedTemps">
            <label>Selected temperaments:</label>
            {input.temperaments.map((e) => (
              <button onClick={() => handleDelete(e)}>{e} x</button>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div>NOTHING HERE, BRO</div>;
  }
};

export default Creator;
