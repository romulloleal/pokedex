<script lang="ts">
import { useRoute, RouterLink } from "vue-router";

import { api } from "@/services/api";
import type { Pokemon } from "@/types/Pokemon";
import BackSVG from "@/assets/back.svg";
import Details from "@/components/PokemonDetails/Details.vue";

type DataType = {
  pokemon: Pokemon | undefined;
  evolutions: any;
  goBack: string;
};

export default {
  data(): DataType {
    return {
      pokemon: undefined,
      evolutions: [],
      goBack: BackSVG,
    };
  },
  components: { RouterLink, Details },
  async created() {
    const pokemonName = useRoute().params.pokemonName as string;

    const pokemonResponse = await api.get(`/pokemon/${pokemonName}`);
    const especiesResponse = await api.get(`/pokemon-species/${pokemonName}`);
    const chainsResponse = await api.get(
      `${especiesResponse.data.evolution_chain.url}`
    );

    this.pokemon = pokemonResponse.data;
  },
};
</script>

<template>
  <div v-if="pokemon">
    <header :class="`bg-${pokemon?.types[0].type.name}`">
      <RouterLink to="/" class="goBack"><img :src="goBack" /></RouterLink>
      <span class="name">{{ pokemon.name }}</span>
    </header>

    <Details :pokemon="pokemon" />
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: relative;
}

header .name {
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
}

.goBack {
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
