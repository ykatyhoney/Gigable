import * as types from "../types/GigsType";

const INITIAL_STATE = {
  items: [],
  numberOfPages: 1,
  page: 1,
  resultsPerPage: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_GIGS_LIST_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
