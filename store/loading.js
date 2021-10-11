export const state = () => ({
  isLoading: false,
})

export const mutations = {
  /**
   * @param {boolean} payload
   * @param {LoadingStateType} state
   * */
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },
}

/** @type {LoadingActionType} */
export const actions = {
  toggleLoading: ({ commit }, payload) => {
    commit('SET_LOADING', payload)
  },
}
