<template>
  <tr>
    <td>{{ timestampFormatted }}</td>
    <td>{{ view.timezone }}</td>
    <td>{{ view.pathname }}</td>
    <td>{{ view.referrer }}</td>
    <td>{{ view.browserName }}</td>
    <td>{{ view.engineName }}</td>
    <td>{{ view.osName }}</td>
    <td>{{ view.deviceVendor }}</td>
    <td>{{ view.windowInnerWidth }} </td>
  </tr>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ViewTableRow',
  props: ['view'],
  computed: {
    timestampFormatted() {
      return moment(this.view.timestamp).format('MMM D, h:mma')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
