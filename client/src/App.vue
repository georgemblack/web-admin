<template>
  <div class="my-app">
    <view-table></view-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ViewTable from './views/ViewTable'

export default {
  name: 'App',
  components: { ViewTable },
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
