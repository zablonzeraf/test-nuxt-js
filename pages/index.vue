<template>
  <main class="w-full">
    <Navbar />

    <div class="product-list">
      <product-card v-for="item in items" :key="item" />
    </div>

    <Footer />
  </main>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: { ProductCard },
  middleware: 'auth',
  data: () => ({
    items: [1, 2, 3, 4],
  }),
  created() {
    this.$store.commit('loading/SET_LOADING', true)

    // eslint-disable-next-line no-console
    console.log({
      isLoading: this.$store.state.loading?.isLoading,
    })
  },
}
</script>

<style scoped>
.product-list {
  @apply mt-2 mb-12 px-3
    grid gap-x-4 grid-cols-1
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4
    justify-around;
}
</style>
