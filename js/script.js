const button = document.querySelector('.btn');
const searchInput = document.querySelector('.form-control');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '639ac62715mshb0b42d8a0ee40bdp15ecc5jsn0f89107ac09d',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
  },
};

const handleClick = e => {
  e.preventDefault();
  console.log('Button was clicked');
  fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=fish`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      console.log(`${response.count} recipes found with ${response.q}!`);
    })
    .catch(err => console.error(err));
};

button.addEventListener('click', handleClick);
