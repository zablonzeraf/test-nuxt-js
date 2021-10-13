<template>
  <div class="form-control">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Enter Keyword Here"
        class="search-input"
      />
      <button class="search-btn">
        <fa-icon icon="search" class="mr-1 text-xs" /> Search
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-bar {
  @apply relative mx-2 md:mx-32;
}

.search-btn {
  @apply absolute top-0 right-0 rounded rounded-l-none btn border-none bg-gray-400;
}

.search-input {
  @apply w-full pr-16 rounded input input-bordered border-0 shadow;
}
</style>
