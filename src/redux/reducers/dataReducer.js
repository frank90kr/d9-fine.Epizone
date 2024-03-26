import { GET_AGENCY } from "../actions";

const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENCY:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default dataReducer;
