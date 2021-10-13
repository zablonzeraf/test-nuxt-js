<template>
  <main class="w-full">
    <Navbar />

    <SearchBar class="mt-2" />

    <div v-if="!isLoading" class="product-list">
      <product-card
        v-for="(product, idx) in products"
        v-bind="product"
        :key="idx"
      />
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
import { mapState } from 'vuex'
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
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
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
