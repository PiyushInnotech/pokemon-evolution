<template>
  <div class="cardWrap">
    <div class="cardTitle"><slot name="description"></slot></div>
    <div class="cardImg"><slot name="content"></slot></div>
    <div class="cardInfo">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { toRef } from "@vue/reactivity";
export default {
  name: "pokemonCard",
  props: ["pokemonNo", "evolvedPokemon"],
  setup(props) {
    const pokemon = toRef(props, "pokemonNo");

    return {
      pokemon,
    };
  },
};
</script>

<style scoped>
</style>