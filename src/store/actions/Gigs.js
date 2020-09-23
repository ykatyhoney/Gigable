import * as types from "../types/GigsType";

export const gigsListRequest = payload => ({
  type: types.GET_GIGS_LIST_REQUEST,
  payload
});

export const gigsListReceive = payload => ({
  type: types.GET_GIGS_LIST_RECEIVE,
  payload
});
