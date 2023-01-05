<template>
  <div class="cardWrap" v-for="pokemon in pokemons" :key="pokemon.id">
    <div class="cardTitle">{{ pokemon.name }} # {{ pokemon.id }}</div>
    <div class="cardImg"><img :src="pokemon.img" /></div>
    <div class="cardInfo">
      <div v-for="type in pokemon.types" :key="type.slot">
        {{ type.type.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from "@vue/reactivity";
export default {
  name: "pokemonCard",
  props: ["pokemon1"],
  setup(props) {
    const pokemons = toRef(props, "pokemon1");

    return {
      pokemons,
    };
  },
};
</script>

<style scoped>
</style>