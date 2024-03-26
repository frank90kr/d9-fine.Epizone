import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const jobReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((fav, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

export default jobReducer;
