const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let = searchQuery = '';
const APP_ID = '57e00089';
const APP_KEY = '7b4214c509bcd8af227353557b89b5cf';

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI() {
  const baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}
function generateHTML(results) {
  container.classList.remove('initial');
  let generatedHTML = '';
  results.map(result => {
    generatedHTML += `
          <div class="recipe">
            <img src="${result.recipe.image}" alt="pizza image" />
            <div class="recipe__container">
              <h2 class="recipe__title">${result.recipe.label}</h2>
              <a href="${
                result.recipe.url
              }" class="view-btn" target="blank">View recipe</a>
            </div>
            <p class="recipe__data">Calories: ${result.recipe.calories.toFixed(
              2,
            )}</p>
            <p class="recipe__data">Diet label: ${
              result.recipe.dietLabels.length > 0
                ? result.recipe.dietLabels
                : 'Data not found'
            }</p>
            <p class="recipe__data">Health label: ${
              result.recipe.healthLabels
            }</p>
          </div>
            `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
