<template>
  <tr>
    <td>{{ view.timestamp }}</td>
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
export default {
  name: 'ViewTableRow',
  props: ['view']
}
</script>

<style lang="scss" scoped>
</style>
