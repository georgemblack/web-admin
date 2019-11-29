<template>
  <div>
    <h1>Web Dash</h1>
    <div class="controls">
      <button @click="getAllViews">
        Refresh
      </button>
    </div>
    <div class="view-table">
      <view-table />
    </div>
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
.controls {
  text-align: right;
}
.view-table {
  margin-top: 1em;
}
</style>
