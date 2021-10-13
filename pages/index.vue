<template>
  <main class="w-full">
    <Navbar />

    <SearchBar class="mt-2" />

    <div v-if="!isLoading" class="product-list">
      <product-card v-for="(product, idx) in products" :key="idx" />
    </div>
    <div v-else class="flex justify-center pt-8 pb-48">
      <div>Loading Products, Please wait...</div>
    </div>

    <Footer />
  </main>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: { ProductCard },
  middleware: 'auth',
  data() {
    return {
      isLoading: false,
      products: [],
    }
  },
  created() {
    // Read collection of products
    this.readProducts()
  },
  methods: {
    async readProducts() {
      this.toggleLoading(true)
      // Dispatch to read products
      await this.$store.dispatch('product/getAllProducts')
      this.products = this.$store.state.product.products
      this.toggleLoading(false)
    },
    /** @param {Boolean} isLoading */
    toggleLoading(isLoading) {
      this.isLoading = isLoading
    },
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
