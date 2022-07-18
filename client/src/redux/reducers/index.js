const initialState = {
  dogs: [], //copia burda para hacerle magia
  allDogs: [], //los buenos dogs
  temperaments: [],
  chocoDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_TEMPS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "GET_QUERY":
      return {
        ...state,
        allDogs: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        chocoDetail: action.payload,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "DELETE_BY_ID":
      return {
        ...state,
      };
    case "FILTER_SOURCE":
      const copy = [...state.dogs];
      const bySource =
        action.payload === "MIXED"
          ? state.dogs
          : action.payload === "DB"
          ? copy.filter((el) => el.createdInDb)
          : copy.filter((el) => !el.createdInDb);
      return {
        ...state,
        allDogs: bySource,
      };
    case "SORT_WEIGHT":
      const falseDogs = [...state.dogs];

      const sortWait =
        action.payload === "Low"
          ? falseDogs.sort((a, b) => {
              if (1 * a.weight.split(" - ")[0] > 1 * b.weight.split(" - ")[0]) {
                return 1;
              }
              if (1 * b.weight.split(" - ")[0] > 1 * a.weight.split(" - ")[0]) {
                return -1;
              }
              return 0;
            })
          : action.payload === "High"
          ? falseDogs.sort((a, b) => {
              if (1 * a.weight.split(" - ")[0] > 1 * b.weight.split(" - ")[0]) {
                return -1;
              }
              if (1 * a.weight.split(" - ")[0] > 1 * b.weight.split(" - ")[0]) {
                return 1;
              }
              return 0;
            })
          : falseDogs;
      console.log(falseDogs.map((d) => d.weight.split(" - ")[0]));
      return {
        ...state,
        allDogs: sortWait,
      };
    case "SORT_NAME":
      const copeeDogs = [...state.dogs];
      const sorted =
        action.payload === "ASC"
          ? state.dogs.slice().sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "DSC"
          ? state.dogs.slice().sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : copeeDogs;
      return {
        ...state,
        allDogs: sorted,
      };
    case "FILTER_TEMPS":
      const structuredCopy = [...state.dogs];
      console.log(structuredCopy);
      const filteredByTemp =
        action.payload === "ALL"
          ? state.dogs
          : structuredCopy.filter((doggos) =>
              doggos?.temperaments?.map((t) => t).includes(action.payload)
            );
      return {
        ...state,
        allDogs: filteredByTemp,
      };
    case "CLEAR":
      return {
        ...state,
        chocoDetail: [],
      };
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
