<template>
  <div class="cardWrapper">
    <div class="cardWrap">
      <div class="cardTitle">{{ pokemon.name }} # {{ pokemon.id }}</div>
      <div class="cardImg"><img :src="pokemon.img" /></div>
      <div class="cardInfo">
        <div v-for="type in pokemon.types" :key="type.slot">
          {{ type.type.name }}
        </div>
      </div>
    </div>
    <div class="cardWrap">
      <div class="cardTitle">{{ pokemon.name }} # {{ pokemon.id }}</div>
      <div class="cardImg"><img :src="pokemon.img" /></div>
      <div class="cardInfo">
        <div v-for="type in pokemon.types" :key="type.slot">
          {{ type.type.name }}
        </div>
      </div>
    </div>
    <div class="cardWrap">
      <div class="cardTitle">{{ pokemon.name }} # {{ pokemon.id }}</div>
      <div class="cardImg"><img :src="pokemon.img" /></div>
      <div class="cardInfo">
        <div v-for="type in pokemon.types" :key="type.slot">
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const pokemon = ref({});

    const pokemonApi = async (key) => {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + key);
      var data = await res.json();
      return data;
    };
    const pokemonCard = (i) =>
      pokemonApi(i)
        .then((data) => {
          pokemon.value.id = data.id;
          pokemon.value.name = data.name;
          pokemon.value.img =
            data.sprites.other["official-artwork"].front_default;
          pokemon.value.types = data.types;
          return pokemon;
        })
        .catch(console.log(Error));

    Promise.all([pokemonApi(1), pokemonApi(3)]).then((data) => {
      pokemon.value.id = data.id;
      pokemon.value.name = data.name;
      pokemon.value.img = data.sprites.other["official-artwork"].front_default;
      pokemon.value.types = data.types;
    });

    return { pokemon };
  },
};
</script>

<style >
.cardWrapper {
  display: flex;
  margin: 100px 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: solid 5px rgb(212, 212, 212);
  border-radius: 20px;
  width: 30%;
}
.cardImg {
  width: 100%;
  padding-top: 30px;
  border-bottom: solid 5px rgb(212, 212, 212);
  padding-bottom: 30px;
}
.cardImg img {
  width: 100%;
}
.cardTitle {
  font-size: 40px;
  width: 100%;
  font-weight: bold;
  padding-top: 30px;
  border-bottom: solid 5px rgb(212, 212, 212);
  padding-bottom: 30px;
  text-transform: capitalize;
}
.cardInfo {
  font-size: 25px;
  margin-top: 20px;
  text-transform: capitalize;
  margin-bottom: 30px;
}
.cardInfo div {
  margin-bottom: 10px;
}
</style>