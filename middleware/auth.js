export default ({ store, redirect }) =>
  !store.getters['user/isAuthenticated'] && redirect('/auth/signin')
