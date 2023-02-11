<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    base_stat: { type: Number, required: true },
    type: String,
  },
  data() {
    return {
      style: `width: ${(this.base_stat / 100) * 100}%`,
    };
  },
};
</script>

<template>
  <div class="progressBar orange">
    <span :class="`bg-${type}`" :style="style">{{ base_stat }}</span>
  </div>
</template>

<style>
.progressBar {
  width: 200px;
  box-sizing: content-box;
  height: 20px; /* Can be anything */
  position: relative;
  background: #e9e7e7;
  border-radius: 5px;
}
.progressBar > span {
  display: block;
  height: 100%;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.progressBar > span:after,
.animate > span > span {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  z-index: 1;
  background-size: 25px 25px;
  animation: move 5s linear infinite;

  overflow: hidden;
}

.animate > span:after {
  display: none;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}
</style>
