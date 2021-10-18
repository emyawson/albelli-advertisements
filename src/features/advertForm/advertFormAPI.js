import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;
// fetch ads from api
export const  createAdvert = (adData) => {
    const url = baseUrl + '/api/advertisements/create';

    return axios.post(url,adData);
  }
  