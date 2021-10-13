<template>
  <div class="product-card">
    <figure>
      <img src="https://picsum.photos/id/1005/400/250" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
      </h2>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure
        sapiente.
      </p>
      <div class="justify-start card-actions">
        <button class="btn btn-sm btn-info">
          <fa-icon icon="info-circle" class="mx-1" /> More info
        </button>
        <button class="btn btn-sm btn-success">
          <fa-icon icon="shopping-cart" class="mx-1" /> Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Product Name',
    },
    description: {
      type: String,
      default: '',
    },
    instock: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.product-card {
  @apply card shadow-lg rounded bordered border-b-4 border-gray-400 inline-block;
  max-width: 300px;
}
</style>
