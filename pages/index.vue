<template>
  <main>
    <Navbar />

    <Footer />
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  created() {
    this.$store.commit('loading/SET_LOADING', true)

    // eslint-disable-next-line no-console
    console.log({
      isLoading: this.$store.state.loading?.isLoading
    })
  }
}
</script>
