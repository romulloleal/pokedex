<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    searchPokemons: Function as PropType<(event: Event) => void>,
  },
};
</script>

<template>
  <input type="text" placeholder="Search" @input="searchPokemons" />
</template>

<style scoped>
input {
  background-color: #ffffff;
  height: 40px;
  border: 1px solid rgba(229, 229, 229, 0.9);
  padding: 0 5px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
  margin-bottom: 20px;
}
</style>
