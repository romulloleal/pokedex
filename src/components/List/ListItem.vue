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
  background-color: #ffffff;
  padding: 10px;
  min-width: 170px;
  flex-basis: 100%;
  border: 1px solid rgba(229, 229, 229, 0.9);
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 406px) {
  .item {
    flex-basis: 10.75%;
  }
}

.name {
  width: 100%;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
}
</style>
