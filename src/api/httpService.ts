import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const get = async (url) => {
  const promise = await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});

  return promise;
};

export {get};
