<template>
  <div class="my-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['getAllViews'])
  },
  mounted() {
    this.getAllViews()
  }
}
</script>

<!-- WARNING: Not scoped -->
<style lang="scss">
</style>
