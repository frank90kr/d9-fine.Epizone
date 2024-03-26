export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_AGENCY = "GET_AGENCY";

export const addToFavourite = (agency) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: agency,
  };
};

export const deleteAgency = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};

export const getAgencyAction = () => {
  return (dispatch, getState) => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((fetchedAgency) => {
        getState();

        dispatch({
          type: GET_AGENCY,
          payload: fetchedAgency,
        });
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };
};
