<template>
  <main class="w-full">
    <Navbar />

    <SearchBar class="mt-2" />

    <div v-if="!isLoading" class="product-list">
      <NuxtChild />
    </div>
    <div v-else class="flex justify-center pt-8 pb-48">
      <div>
        <fa-icon class="animate-spin" icon="sync" /> Loading Products, Please
        wait...
      </div>
    </div>

    <Footer />
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
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
