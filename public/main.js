const displaySection = document.querySelector("#display-section");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const baseURL = `http://localhost:4444`;
const getWeatherforCities = () => {
  console.log("hit");

  axios
    .get(`${baseURL}/api/weather/cities`)
    .then((res) => {
      console.log(res.data);
      createCard(res.data);
    })
    .catch((err) => console.log(err));
};

const getWeatherSearch = (e) => {
  e.preventDefault();
  axios
    .get(`${baseURL}/api/weather/search?location=${searchInput.value}`)
    .then((res) => {
      localStorage.clear()
      localStorage.setItem("city", JSON.stringify(res.data));
      createCard(res.data);
      // window.location = "./test.html";
      
    })
    .catch((err) => console.log(err));
  };
// localStorage.clear()


document.addEventListener("DOMContentLoaded", getWeatherforCities);
// getWeatherforCities();
searchForm.addEventListener("submit", getWeatherSearch);
