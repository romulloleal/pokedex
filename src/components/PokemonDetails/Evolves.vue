<script lang="ts">
import type { PokemonList } from "@/types/PokemonList";
import type { PropType } from "vue";
import List from "../List.vue";

export default {
  props: {
    evolves: [] as PropType<PokemonList[]>,
    bgColor: String,
  },
  components: { List },
};
</script>

<template>
  <div class="evolves">
    <span :class="`title bg-${bgColor}`">Evolution Chain</span>
    <List :pokemon-list="evolves" />
  </div>
</template>

<style scoped>
.evolves {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.evolves .title {
  display: table;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
