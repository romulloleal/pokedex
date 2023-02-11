<script lang="ts">
import type { PropType } from "vue";
import type { PokemonList } from "@/types/PokemonList";
import { RouterLink } from "vue-router";

export default {
  props: {
    pokemonList: Array as PropType<PokemonList[]>,
  },
  methods: {
    getId(url: string) {
      return url.split("/").slice(-2).shift();
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <div class="container">
    <RouterLink
      :to="pokemon.name"
      class="pokemon"
      v-for="(pokemon, index) in pokemonList"
      :key="index"
    >
      <div class="header">
        <span class="name">{{ pokemon.name }}</span>
        <span class="id">#{{ getId(pokemon.url) }}</span>
      </div>
      <img
        v-lazy="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getId(
            pokemon.url
          )}.png`
        "
        alt="Bulbassaur"
        width="150"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.pokemon {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  min-width: 170px;
  border: 1px solid rgba(229, 229, 229, 0.9);
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 406px) {
  .pokemon {
    flex-basis: 10.75%;
  }
}

.pokemon .header {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pokemon .header .name {
  width: 100%;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
