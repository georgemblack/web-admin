<template>
  <div class="link-form">
    <input
      v-model="title"
      type="text"
      placeholder="title"
    >
    <input
      v-model="url"
      type="text"
      placeholder="url"
    >
    <button @click="handleSubmit">
      Post
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LinkForm',
  data() {
    return {
      title: '',
      url: '',
    }
  },
  methods: {
    handleSubmit() {
      this.postLink({
        title: this.title,
        url: this.url
      })
      this.title = ''
      this.url = ''
    },
    ...mapActions(['postLink'])
  }
}
</script>

<style lang="scss" scoped>
</style>
