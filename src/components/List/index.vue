<script lang="ts">
import ListItem from "./ListItem.vue";
import type { PropType } from "vue";

type PokemonList = {
  name: string;
  url: string;
};

export default {
  props: {
    pokemonList: { type: Array as PropType<PokemonList[]> },
  },
  components: { ListItem },
};
</script>

<template>
  <div class="container">
    <ListItem v-for="(pokemon, index) in pokemonList" :key="index">
      <template #name>{{ pokemon.name }}</template>
      <template #image>
        <img
          v-lazy="
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url
              .split('/')
              .slice(-2)
              .shift()}.png`
          "
          alt="Bulbassaur"
          width="150"
        />
      </template>
    </ListItem>
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
</style>
