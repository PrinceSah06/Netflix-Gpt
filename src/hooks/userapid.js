// Replace 'YOUR_RAPIDAPI_KEY' with your actual API key
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    'x-rapidapi-key': '600a136e87msh425f237cca40fcdp17c64djsn8b6e78e3ef7a'
  }
};

fetch('https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error:', err);
  });