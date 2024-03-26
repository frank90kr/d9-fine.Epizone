import { ADD_TO_FAVOURITE } from "../actions";

const initialState = {
  favourites: [],
};

const addReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};

export default addReducer;
