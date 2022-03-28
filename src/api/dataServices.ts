import {get} from "./httpService";

const getJobs = async (url) => {
  return get(url);
};

export {getJobs};
