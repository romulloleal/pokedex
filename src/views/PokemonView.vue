<script lang="ts">
import { useRoute, RouterLink } from "vue-router";

import { api } from "@/services/api";
import type { Pokemon } from "@/types/Pokemon";
import type { PokemonList } from "@/types/PokemonList";
import BackSVG from "@/assets/back.svg";
import Details from "@/components/PokemonDetails/Details.vue";
import Evolves from "@/components/PokemonDetails/Evolves.vue";

type DataType = {
  pokemon: Pokemon | undefined;
  evolves: PokemonList[];
  goBack: string;
};

export default {
  data(): DataType {
    return {
      pokemon: undefined,
      evolves: [],
      goBack: BackSVG,
    };
  },
  components: { RouterLink, Details, Evolves },
  methods: {
    getEvolves(chain: any) {
      this.evolves.push({
        name: chain.species.name,
        url: chain.species.url,
      });

      if (chain.evolves_to.length) {
        this.getEvolves(chain.evolves_to[0]);
      }
    },
    async getPokemonDetails(pokemonName: string) {
      this.evolves = [];

      const pokemonResponse = await api.get(`/pokemon/${pokemonName}`);
      const especiesResponse = await api.get(`/pokemon-species/${pokemonName}`);
      const evolutionChainResponse = await api.get(
        `${especiesResponse.data.evolution_chain.url}`
      );

      this.getEvolves(evolutionChainResponse.data.chain);

      this.pokemon = pokemonResponse.data;
    },
  },
  async mounted() {
    const pokemonName = this.$route.params.pokemonName as string;
    await this.getPokemonDetails(pokemonName);
  },
  beforeRouteUpdate(to, from, next) {
    const pokemonName = to.params.pokemonName as string;
    this.getPokemonDetails(pokemonName);
    next();
  },
};
</script>

<template>
  <div v-if="pokemon" class="content">
    <header :class="`bg-${pokemon.types[0].type.name}`">
      <RouterLink to="/" class="goBack"><img :src="goBack" /></RouterLink>
      <span class="name">{{ pokemon.name }}</span>
    </header>

    <Details :pokemon="pokemon"></Details>

    <Evolves :evolves="evolves" :bgColor="pokemon.types[0].type.name"></Evolves>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: relative;
}

header .goBack {
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
}

header .name {
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
}
</style>
