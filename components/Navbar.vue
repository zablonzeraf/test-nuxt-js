<template>
  <div class="navbar shadow-lg bg-neutral text-neutral-content">
    <div class="flex-none">
      <button disabled class="btn btn-square glass rounded-sm">
        <fa-icon icon="check-circle" class="text-3xl text-yellow-500" />
      </button>
    </div>
    <div class="flex-1 px-2 m1-2">
      <span class="text-lg font-bold text-gray-400">CheckIt!</span>
    </div>
    <div class="flex-1 justify-end">
      <button class="nav-cart">
        <fa-icon icon="shopping-cart" />
        <div class="nav-cart-badge">{{ cart_count }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cart_count: 12,
  }),
}
</script>

<style scoped>
.nav-cart {
  @apply btn text-xl;
  position: relative;
}

.nav-cart-badge {
  @apply badge badge-sm badge-secondary;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(10%);
}
</style>
