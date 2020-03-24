<template>
  <tr>
    <td>{{ timestampFormatted }}</td>
    <td>{{ view.timezone }}</td>
    <td>{{ view.pathname }}</td>
    <td>{{ referrerFormatted }}</td>
    <td>{{ view.browserName }}</td>
    <td>{{ view.osName }}</td>
    <td>{{ view.windowInnerWidth }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "ViewTableRow",
  props: ["view"],
  computed: {
    timestampFormatted() {
      return moment(this.view.timestamp.toString(), "X").format("MMM D, h:mma");
    },
    referrerFormatted() {
      let cleaned = this.view.referrer
        .replace("https://", "")
        .replace("georgeblack.me", "");
      if (cleaned.length > 40) {
        cleaned = cleaned.substring(0, 37) + "...";
      }
      return cleaned;
    },
  },
};
</script>

<style lang="scss" scoped></style>
