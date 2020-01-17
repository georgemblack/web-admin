<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit">
      <input
        v-model="username"
        type="text"
        autocomplete="username"
        placeholder="username"
      >
      <input
        v-model="password"
        type="password"
        autocomplete="current-password"
        placeholder="password"
      >
      <button type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      this.getAuthToken({
        username: this.username,
        password: this.password
      })
    },
    ...mapActions(['getAuthToken'])
  }
}
</script>

<style lang="scss" scoped>
</style>
