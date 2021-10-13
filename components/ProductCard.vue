<template>
  <div class="product-card">
    <figure class="border-b-4 border-gray-100">
      <img
        src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
      </h2>
      <p>
        {{ description }}
      </p>
      <div class="product-details">
        <div class="text-green-400">
          <fa-icon icon="dollar-sign" />
          <span class="font-bold">Price: ${{ unit_price }}</span>
        </div>
        <div class="text-red-400">
          <fa-icon icon="shopping-basket" />
          <span class="font-bold">Sold: {{ sold }}</span>
        </div>
      </div>
      <div class="justify-start card-actions">
        <NuxtLink :to="productLink">
          <button class="btn btn-sm btn-info">
            <fa-icon icon="info-circle" class="mx-1" /> More info
          </button>
        </NuxtLink>
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
    // eslint-disable-next-line vue/prop-name-casing
    unit_price: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    productLink() {
      return `/product/${this.id}`
    },
  },
}
</script>

<style scoped>
.product-card {
  @apply card shadow-lg rounded bordered border-b-4 border-gray-400 inline-block;
  max-width: 300px;
}

.card-title {
  cursor: default;
}

.product-details {
  @apply flex flex-row justify-start mt-2 items-start card-actions;
}
</style>
