const axios = require("axios");

let getOriginalPokemon = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(function(response) {
      // handle success
      let pokemonNames = response.data.results.map(pokemon => {
        return pokemon.name;
      });
      console.log(pokemonNames);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

let getSpecificPokemon = pokemon => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(function(response) {
      // handle success
      // console.log(response);
      console.log(
        `You have chosen ${response.data.name}, #${response.data.order}!`
      );
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

getOriginalPokemon();
getSpecificPokemon("jigglypuff");

////////////////////Multiple concurrent requests////////////////////////
let getPikachu = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/");
};

let getSquirtle = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/squirtle/");
};

axios.all([getPikachu(), getSquirtle()]).then(
  axios.spread((pikachu, squirtle) => {
    console.log(
      `Best Friends, ${pikachu.data.name}, #${pikachu.data.order} and ${squirtle.data.name}, #${squirtle.data.order}!`
    );
  })
);
