<template>
  <div class="my-app">
    <view-table />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ViewTable from './views/ViewTable'

export default {
  name: 'App',
  components: { ViewTable },
  mounted() {
    this.getAllViews()
  },
  methods: {
    ...mapActions(['getAllViews'])
  }
}
</script>

<!-- WARNING: Not scoped -->
<style lang="scss">
</style>
