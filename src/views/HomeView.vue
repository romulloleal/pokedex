<script lang="ts">
import List from "@/components/List.vue";
import Search from "@/components/Search.vue";
import LogoImg from "@/assets/logo.png";
import type { PokemonList } from "@/types/PokemonList";
import { api } from "@/services/api";

export default {
  data() {
    return {
      logo: LogoImg,
      pokemonList: [] as PokemonList[],
      searchedPokemons: [] as PokemonList[],
    };
  },
  components: { List, Search },
  methods: {
    async getPokemonList() {
      const response = await api.get("/pokemon-species?limit=1008");
      this.pokemonList = response.data.results;
      this.searchedPokemons = response.data.results;
    },

    searchPokemons(event: Event) {
      const search = (event.target as HTMLInputElement).value;
      this.searchedPokemons = this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
  async created() {
    await this.getPokemonList();
  },
};
</script>

<template>
  <header>
    <img :src="logo" />
  </header>
  <main>
    <Search :search-pokemons="searchPokemons" />
    <List :pokemon-list="searchedPokemons" />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}

header img {
  width: 100%;
  max-width: 454px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
