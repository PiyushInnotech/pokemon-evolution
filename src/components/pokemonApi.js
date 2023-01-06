export const pokemonApi = async (key) => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + key);
    var data = await res.json();
    return data;
  };