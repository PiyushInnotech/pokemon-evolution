<template>
  <div class="cardWrapper">
    <pokemonCard :pokemon1="pokemons" />
  </div>
</template>

<script>
import { ref } from "vue";
import pokemonCard from "./components/card.vue";
export default {
  name: "App",
  setup() {
    const pokemons = ref("");

    const pokemonApi = async (key) => {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + key);
      var data = await res.json();
      return data;
    };
    Promise.all([pokemonApi(1), pokemonApi(4), pokemonApi(7)]).then((data) => {
      pokemons.value = data.map((dat) => ({
        id: dat.id,
        name: dat.name,
        img: dat.sprites.other["official-artwork"].front_default,
        types: dat.types,
      }));
    });
    return { pokemons };
  },
  components: { pokemonCard },
};
</script>

<style >
</style>