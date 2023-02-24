import axios from "axios";

const BASE_URL = "http://api.aviationstack.com/v1/";
const ACCESS_KEY = "bd3f337059ff12309b2d12f3f89ec318"

const options = {
  url: BASE_URL,
  
  headers: {
    'X-RapidAPI-Key': 'bd3f337059ff12309b2d12f3f89ec318',
    'X-RapidAPI-Host': 'api.aviationstack.com'
  }
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const featchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}?access_key=${ACCESS_KEY}`, options);
  return data;
};
