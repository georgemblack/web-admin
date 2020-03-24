<template>
  <div class="view-table">
    <table class="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Time Zone</th>
          <th>Path</th>
          <th>Referrer</th>
          <th>Browser</th>
          <th>OS</th>
          <th>Window</th>
        </tr>
      </thead>
      <tbody>
        <view-table-row v-for="view in allViews" :key="view.id" :view="view" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ViewTableRow from "./ViewTableRow";

export default {
  name: "ViewTable",
  components: { ViewTableRow },
  computed: {
    ...mapGetters(["allViews"]),
  },
  methods: {
    ...mapActions(["getAllViews"]),
  },
};
</script>

<style lang="scss" scoped></style>
