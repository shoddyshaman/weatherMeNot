require("dotenv").config();
const { WEATHER_API_KEY } = process.env;
const axios = require("axios");
let majorCities = [
  "Detroit",
  "Buenos Aires",
  "Tokyo",
  "Paris",
  "Dubai",
  "Cairo",
];

let majorCitiesWeather = [];
let majorCitiesWeatherSet = new Set();

let weather_base_URL = `http://api.weatherapi.com/v1/current.json`;

module.exports = {
  getWeatherForMajorCities: async (req, res) => {
    await majorCities.forEach((city) => {
      axios
        .get(`${weather_base_URL}?key=${WEATHER_API_KEY}&q=${city}`)
        .then((response) => {
          majorCitiesWeather.push(response.data);
        })
        .catch((err) => console.log(err));
    });
    const filteredArr = majorCitiesWeather.filter((obj) => {
      // check if name property value is already in the set
      const isPresentInSet = majorCitiesWeatherSet.has(obj.location);

      // add name property value to Set
      majorCitiesWeatherSet.add(obj.location);

      // return the negated value of
      // isPresentInSet variable
      return !isPresentInSet;
    });
    //   console.log(filteredArr)
    return res.status(200).send(filteredArr);
  },
};
