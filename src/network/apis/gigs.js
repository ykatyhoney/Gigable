import { axiosInstance } from "./index";

// Get gigs from API
const getGigs = async (payload) => {
  return await axiosInstance.get(`helpers/gigs`, { params: payload });
};

export default {
  getGigs
};
