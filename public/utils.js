//utility functions
function removeElements(element) {
    const parent = document.getElementById(element);
    console.log(parent);
    while (parent.firstChild) {
      parent.firstChild.remove();
    }
  }
  function createCard(arr) {
    displaySection.innerHTML = "";
    searchInput.value = ``;
    arr.map((city) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("card");
      newDiv.style.width = "16rem";
      newDiv.style.height = "16rem";
      newDiv.classList.add("mt-5");
      newDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 18rem;">
  <div class="card-header">${city.location.name}</div>
  <div class="card-body">
  <h5 class="card-title">${city.location.country}</h5>
  <p class="card-text">${city.current.temp_f}</p>
  <img src="${city.current.condition.icon}" class="card-img-botttom" alt="...">
  <span class="card-text">${city.current.condition.text}</span>
  </div>
          `;
      displaySection.appendChild(newDiv);
    });
  }