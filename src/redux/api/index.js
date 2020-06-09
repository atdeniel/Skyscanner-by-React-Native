import axios from "axios";

const baseURL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/';

export default (url, method, data,headers) => {
    return axios({
        baseURL,
        method,
        url,
        data,
        headers: {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "f97b3bfb8bmsh4eb8f4959e64692p1e86aejsn15e559de1568"
        }
    });
}