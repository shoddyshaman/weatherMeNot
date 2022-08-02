const displaySection = document.querySelector("#display-section");

const baseURL = `http://localhost:4444`;
const getWeatherforCities = () => {
  console.log('hit')
  displaySection.innerHTML = '';
  //  displaySection.innerHTML !== '' ? removeElements('display-section') : null
  // console.log(displaySection)
  axios
    .get(`${baseURL}/api/weather/cities`)
    .then((res) => {
      console.log(res.data)
      res.data.map((city) => {
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
    })
    .catch((err) => console.log(err));
};

function removeElements(element) {
  const parent = document.getElementById(element);
  console.log(parent)
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

document.addEventListener("DOMContentLoaded", getWeatherforCities);
// getWeatherforCities();
