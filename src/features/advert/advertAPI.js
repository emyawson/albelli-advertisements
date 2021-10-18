import axios from "axios";

// Use env var for base api usr as it might chnage during 
// deploy to remote servers
const baseUrl = process.env.REACT_APP_API_ENDPOINT;

// fetch ads from api
export const fetchAds = () =>  {
    const url =  baseUrl + '/api/advertisements';
    return axios.get(url);
  }
  