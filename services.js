const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon/jigglypuff/")
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
