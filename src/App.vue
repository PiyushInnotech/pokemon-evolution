<template>
  <pokemonCards :pokemons="pokemons" @evolve="evolveState" />
  <pokemonCards :pokemons="pokemonEvolve" />
</template>

<script>
import { ref } from "vue";
import PokemonCards from "./components/pokemonCards.vue";
import {pokemonApi} from './components/pokemonApi.js'
export default {
  name: "App",
  setup() {
    const pokemons = ref("");
    const pokemonEvolve = ref("");

    Promise.all([pokemonApi(1), pokemonApi(4), pokemonApi(7)]).then((data) => {
      pokemons.value = data.map((dat) => ({
        id: dat.id,
        name: dat.name,
        img: dat.sprites.other["official-artwork"].front_default,
        types: dat.types,
      }));
    });

    //function for evolved pokemon

    const evolveState = (key) => {
      Promise.all([pokemonApi(key + 1), pokemonApi(key + 2)]).then((data) => {
        pokemonEvolve.value = data.map((dat) => ({
          id: dat.id,
          name: dat.name,
          img: dat.sprites.other["official-artwork"].front_default,
          types: dat.types,
        }));
      });
    };
    return { pokemons, pokemonEvolve, evolveState };
  },
  components: { PokemonCards },
};
</script>

<style >
</style>