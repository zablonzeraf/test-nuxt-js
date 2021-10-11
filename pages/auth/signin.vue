<template>
  <div class="flex justify-center items-center">
    <form class="signin-form">
      <fieldset class="form-control">
        <label for="username" class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          id="username"
          ref="usernameInput"
          type="text"
          class="input input-bordered"
          placeholder="Username"
          autofocus
        />
      </fieldset>
      <fieldset class="form-control">
        <label for="password" class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          ref="passwordInput"
          type="password"
          class="input input-bordered"
          placeholder="Password"
        />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.signin-form {
  min-width: 50%;
}
</style>
