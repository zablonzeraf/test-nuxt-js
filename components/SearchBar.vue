<template>
  <div class="form-control">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Enter Keyword Here"
        class="search-input"
        @input="loadOnType"
        @change="loadOnType"
      />
      <!-- Loading Spinner when search is loading -->
      <div v-if="searchLoading" class="search-loading">
        <fa-icon class="animate-spin" icon="sync-alt" />
        <span class="font-bold">Loading Search Results</span>
      </div>
      <button class="search-btn">
        <fa-icon icon="search" class="mr-1 text-xs" /> Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchLoading: false,
    }
  },
  methods: {
    /**
     * @param {InputEvent} event Input event object
     */
    loadOnType(event) {
      /** @type {HTMLInputElement} */
      const searchInput = event.target
      if (searchInput.value.length === 0) {
        this.searchLoading = false
        return
      }

      // Start loading if something is changed and not empty
      this.searchLoading = true
    },
    async searchProducts() {
      // Dispatch search action
      await this.$store.dispatch('searchProducts', this.searchKeyword)
      this.searchLoading = false
    },
  },
}
</script>

<style scoped>
.search-bar {
  @apply relative mx-2 md:mx-32 pb-4 mb-4;
}

.search-btn {
  @apply absolute top-0 right-0 rounded rounded-l-none btn border-none bg-gray-400;
}

.search-input {
  @apply w-full pr-16 rounded input input-bordered border-0 shadow;
}

.search-loading {
  @apply absolute text-sm text-gray-400;
  right: 1;
  bottom: -10%;
}
</style>
