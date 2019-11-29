<template>
  <div class="view-table">
    <button @click="getAllViews">
      Refresh
    </button>
    <table>
      <tr>
        <th>Timestamp</th>
        <th>Time Zone</th>
        <th>Path</th>
        <th>Referrer</th>
        <th>Browser</th>
        <th>Engine</th>
        <th>OS</th>
        <th>Vendor</th>
        <th>Window</th>
      </tr>
      <view-table-row
        v-for="view in allViews"
        :key="view.id"
        :view="view"
      />
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ViewTableRow from './ViewTableRow'

export default {
  name: 'ViewTable',
  components: { ViewTableRow },
  computed: {
    ...mapGetters(['allViews']),
  },
  methods: {
    ...mapActions(['getAllViews'])
  }
}
</script>

<style lang="scss" scoped>
</style>
