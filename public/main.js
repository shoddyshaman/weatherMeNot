const displaySection = document.querySelector("#display-section");
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

const baseURL = `http://localhost:4444`;
const getWeatherforCities = () => {
  console.log('hit')
  
  axios
    .get(`${baseURL}/api/weather/cities`)
    .then((res) => {
      console.log(res.data)
      createCard(res.data)
    })
    .catch((err) => console.log(err));
};

const getWeatherSearch = (e) => {
  e.preventDefault()
  axios.get(`${baseURL}/api/weather/search?location=${searchInput.value}`)
  .then(res => createCard(res.data))
  .catch(err => console.log(err))
}

//utility functions
function removeElements(element) {
  const parent = document.getElementById(element);
  console.log(parent)
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}
function createCard(arr){
  displaySection.innerHTML = '';
  arr.map((city) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.style.width = "16rem";
    newDiv.style.height = "16rem";
    newDiv.classList.add('mt-5')
    newDiv.innerHTML = `
        <div class="card border-info mb-3" style="max-width: 18rem;">
<div class="card-header">${city.location.name}</div>
<div class="card-body">
<h5 class="card-title">${city.location.country}</h5>
<p class="card-text">${city.current.temp_f}</p>
</div>
        `;
    displaySection.appendChild(newDiv);
  });
}

document.addEventListener("DOMContentLoaded", getWeatherforCities);
// getWeatherforCities();
searchForm.addEventListener('submit',getWeatherSearch)
