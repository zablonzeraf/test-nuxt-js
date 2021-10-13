<template>
  <div class="form-control">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Enter Keyword Here"
        class="search-input"
      />
      <button class="search-btn">Search</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-bar {
  @apply relative mx-32;
}

.search-btn {
  @apply absolute top-0 right-0 rounded-l-none btn btn-info;
}

.search-input {
  @apply w-full pr-16 input input-info input-bordered;
}
</style>
