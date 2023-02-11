<template>
  <div class="item">
    <span class="name">
      <slot name="name"></slot>
    </span>
    <slot name="image"></slot>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-card);
  padding: 10px;
  min-width: 170px;
  flex-basis: 10.75%;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  cursor: pointer;
}

.name {
  width: 100%;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
}
</style>
