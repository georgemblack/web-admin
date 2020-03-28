<template>
  <div>
    <h1>Web Dash</h1>
    <login-form v-if="!authorized"></login-form>
    <bookmark-form v-if="authorized"></bookmark-form>
    <div v-if="authorized" class="controls">
      <button @click="getAllViews">
        Refresh
      </button>
    </div>
    <div v-if="authorized" class="view-table">
      <view-table />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import LoginForm from "./views/LoginForm";
import ViewTable from "./views/ViewTable";
import BookmarkForm from "./views/BookmarkForm";

export default {
  name: "App",
  components: { LoginForm, ViewTable, BookmarkForm },
  computed: {
    ...mapGetters(["authorized"]),
  },
  watch: {
    authorized: function (authorized) {
      if (!authorized) return;
      this.getAllViews();
    },
  },
  methods: {
    ...mapActions(["getAllViews"]),
  },
};
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
