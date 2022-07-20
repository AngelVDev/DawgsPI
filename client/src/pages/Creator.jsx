import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createDog, getTemps } from "../redux/actions";

function validateForms(input) {
  const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);
  let error = {};
  if (input.name.length < 1) {
    error.name = "Name required";
  }
  if (input.heightMin <= 0) {
    error.height = "Height above zero, please";
  }
  if (input.heightMax >= 100) {
    error.height = "Height below Zeus, please";
  }
  if (input.weightMin <= 0) {
    error.weight = "Weight above zero, please";
  }
  if (input.weightMax >= 156) {
    error.weight = "Weight below Zorba, please";
  }
  if (input.lifespan <= 0) {
    error.lifespan = "Lifespan above zero, please";
  }
  if (regex.test(input.image) === false) {
    error.image =
      "Format your image to something more friendly, then come back";
  }
  if (!input.temperaments) {
    error.temperaments = "Select at least one temperament";
  }
  return error;
}

const Creator = () => {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.temperaments);
  const history = useHistory();
  let [error, setError] = useState({});
  let [input, setInput] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
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
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
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
              name="heightMin"
              type="number"
            />
            <input
              onChange={(e) => handleChange(e)}
              name="heightMax"
              type="number"
            />
            {error.height && <p className="error">{error.height} </p>}
          </label>
          <label>
            WEIGHT
            <input
              onChange={(e) => handleChange(e)}
              name="weightMin"
              type="number"
            />
            <input
              onChange={(e) => handleChange(e)}
              name="weightMax"
              type="number"
            />
            {error.weight && <p className="error">{error.weight} </p>}
          </label>
          <label>
            LIFESPAN
            <input
              name="lifespan"
              onChange={(e) => handleChange(e)}
              type="number"
            />
            {error.lifespan && <p className="error">{error.lifespan} </p>}
          </label>
          <label>
            IMAGE
            <input name="image" onChange={(e) => handleChange(e)} type="url" />
            {error.image && <p className="error">{error.image} </p>}
          </label>
          <label>
            TEMPERAMENT
            <select
              name="temperaments"
              onChange={(e) => handleSelect(e)}
              id="tempSelection"
            >
              <option value={null}>-</option>
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
              <button key={e} onClick={() => handleDelete(e)}>
                {e} x
              </button>
            ))}
          </div>
        )}
        <button onClick={handleClick}>Back</button>
      </div>
    );
  } else {
    return <div>NOTHING HERE, BRO</div>;
  }
};

export default Creator;
