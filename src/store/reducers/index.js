import { combineReducers } from "redux";
import lang from "./Lang";
import loader from "./Loader";
import snackbar from "./Snackbar";
import gigs from "./Gigs";

export default combineReducers({
  lang,
  loader,
  snackbar,
  gigs
});
