<template>
  <div class="cardWrapper">
    <pokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click.prevent="evolvePokemon(pokemon.id)"
    >
      <template v-slot:description
        >{{ pokemon.name }} # {{ pokemon.id }}</template
      >
      <template v-slot:content><img :src="pokemon.img" /></template>
      <template v-slot:footer>
        <div v-for="type in pokemon.types" :key="type.slot">
          {{ type.type.name }}
        </div>
      </template>
    </pokemonCard>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import pokemonCard from "./card.vue";
export default {
  name: "pokemonCards",
  props: ["pokemons"],
  emits: ["evolve", "ids"],
  components: { pokemonCard },
  setup(props, { emit }) {
    const isOpace = ref(true);
    const ids = ref("");
    function evolvePokemon(id) {
      ids.value = id;
      emit("evolve", ids.value);
    }
    return { evolvePokemon, isOpace, ids };
  },
};
</script>

<style lang="scss" scoped>
</style>