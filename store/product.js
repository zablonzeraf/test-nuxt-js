export const state = () => ({
  products: [],
})

export const mutations = {
  /** */
  GET_ALL_PRODUCTS(state, payload) {
    state.products = payload.products
  },
  /**  */
  GET_PRODUCT(state, payload) {
    console.log({
      state,
      payload,
    })
  },
  /** */
  ADD_PRODUCT(state, payload) {
    console.log({
      state,
      payload,
    })
  },
}

/** @type {ProductActionType} */
export const actions = {
  async getAllProducts({ commit }) {
    const products = []
    const querySnapshot = await this.$fire.firestore
      .collection('products')
      .get()
    querySnapshot.forEach((doc) =>
      products.push({
        id: doc.id,
        ...doc.data(),
      })
    )

    commit('GET_ALL_PRODUCTS', {
      products,
    })
  },
  /** @type {import("~/type.d").ActionType} */
  getProduct: ({ commit }, payload) => {
    commit('GET_PRODUCT', payload)
  },
}
