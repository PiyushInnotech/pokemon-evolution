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
export default {
  name: "pokemonCard",
};
</script>

<style scoped>
</style>