<template>
  <div class="hero min-h-75 pb-16 bg-base-200">
    <div class="flex-col hero-content lg:flex-row">
      <img
        src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
        class="max-w-sm rounded-lg shadow lg:mr-4"
      />
      <div class="">
        <h1 class="mb-5 text-5xl font-bold">{{ product.name }}</h1>
        <p class="mb-5">
          {{ product.description }}
        </p>
        <div class="flex flex-row gap-2 mb-2 justify-start">
          <div
            class="
              btn btn-sm btn-outline btn-info
              text-green-600
              font-bold
              no-animation
              rounded
            "
          >
            Price ${{ product.unit_price }}
          </div>
          <div
            class="
              btn btn-sm btn-outline
              border-red-400
              text-red-600
              font-bold
              no-animation
              rounded
            "
          >
            <fa-icon icon="shopping-bag" class="mr-1" />
            In Stock {{ product.instock }}
          </div>
          <!-- <button class="btn btn-sm btn-info rounded">
            <fa-icon icon="shopping-cart" class="mr-2" />
            Buy Product
          </button> -->
        </div>
        <div class="flex flex-row gap-2 justify-start">
          <button class="btn btn-sm btn-info rounded">
            <fa-icon icon="shopping-cart" class="mr-2" />
            Buy Product
          </button>
          <!-- <button class="btn btn-sm btn-info rounded">
            <fa-icon icon="shopping-cart" class="mr-2" />
            Buy Product
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['product'],
}
</script>
