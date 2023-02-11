<script lang="ts">
import type { Pokemon } from "@/types/Pokemon";
import type { PropType } from "vue";

import ProgressBar from "@/components/PokemonDetails/ProgressBar.vue";

export default {
  props: {
    pokemon: { type: Object as PropType<Pokemon>, required: true },
  },
  components: { ProgressBar },
};
</script>

<template>
  <div class="details">
    <table class="detailBasicInfo">
      <tr>
        <td class="al-right">ID</td>
        <td>#{{ pokemon.id }}</td>
      </tr>
      <tr>
        <td class="al-right">Height</td>
        <td>{{ pokemon.height / 10 }}m</td>
      </tr>
      <tr>
        <td class="al-right">Weight</td>
        <td>{{ pokemon.weight / 10 }}kg</td>
      </tr>
      <tr>
        <td class="al-right">Type</td>
        <td></td>
      </tr>
    </table>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`"
      class="detailImage"
    />
    <table class="detailStats">
      <tr v-for="(stat, index) in pokemon.stats" :key="index">
        <td class="al-right">{{ stat.stat.name.replace("-", " ") }}</td>
        <td>
          <ProgressBar
            :base_stat="stat.base_stat"
            :type="pokemon.types[0].type.name"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.details {
  display: grid;
  align-items: center;
  gap: 5%;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}

@media (min-width: 900px) {
  .details {
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
  }
}

table td {
  padding: 15px 10px;
}

table .al-right {
  text-align: right;
  font-weight: bold;
}

.detailStats .al-right {
  text-transform: capitalize;
}

.detailImage {
  min-width: 200px;
  max-width: 500px;
  width: 100%;
  display: flex;
}
</style>
