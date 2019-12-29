<template>
  <div>
    <h1>Web Dash</h1>
    <credentials
      v-if="!authorized"
    ></credentials>
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
import { mapGetters } from 'vuex'

import Credentials from './views/Credentials'
import ViewTable from './views/ViewTable'

export default {
  name: 'App',
  components: { Credentials, ViewTable },
  computed: {
    ...mapGetters(['authorized'])
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
