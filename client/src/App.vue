<template>
  <div>
    <h1>Web Dash</h1>
    <credentials
      v-if="!authorized"
    ></credentials>
    <div
      v-if="authorized"
      class="controls"
    >
      <button @click="getAllViews">
        Refresh
      </button>
    </div>
    <div
      v-if="authorized"
      class="view-table"
    >
      <view-table />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Credentials from './views/Credentials'
import ViewTable from './views/ViewTable'

export default {
  name: 'App',
  components: { Credentials, ViewTable },
  computed: {
    ...mapGetters(['authorized'])
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
