<script lang="ts">
import axios from "axios";
import List from "@/components/List/index.vue";

export default {
  data() {
    return {
      pokemonList: [],
    };
  },
  components: { List },
  methods: {
    async getPokemonList() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon-species?limit=1008"
      );
      this.pokemonList = response.data.results;
    },
  },
  async created() {
    await this.getPokemonList();
  },
};
</script>

<template>
  <main>
    <List :pokemon-list="pokemonList" />
  </main>
</template>
