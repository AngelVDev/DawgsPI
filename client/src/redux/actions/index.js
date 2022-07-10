import axios from "axios";

export function getDogs() {
  return function (dispatch) {
    axios.get("http://localhost:3001/dogs").then((response) => {
      return dispatch({
        type: "GET_DOGS",
        payload: response.data,
      });
    });
  };
}
export function getTemps() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/temperaments", {});
    dispatch({ type: "GET_TEMPS", payload: json.data });
  };
}
export function getQDogs(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      return dispatch({
        type: "GET_QUERY",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs/" + id);
    dispatch({
      type: "GET_DETAIL",
      payload: json.data,
    });
  };
}
export let createDog = (payload) => {
  return async (dispatch) => {
    try {
      let json = await axios.post("http://localhost:3001/dogs", payload);
      return dispatch({
        type: "POST_DOG",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function orderByName(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SORT_NAME",
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function showCreated(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FILTER_SOURCE",
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function filterByTemps(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FILTER_TEMPS",
        payload,
      });
    } catch (err) {
      return console.log(err);
    }
  };
}
export function orderByWeight(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SORT_WEIGHT",
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/dogs/${id}/delete`);
      return dispatch({ type: "DELETE_BY_ID", payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function clear() {
  return {
    type: "CLEAR",
  };
}
