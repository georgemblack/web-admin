<template>
  <div class="bookmark-form">
    <input v-model="title" type="text" placeholder="title" />
    <input v-model="url" type="text" placeholder="url" />
    <button @click="handleSubmit">
      Post
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookmarkForm",
  data() {
    return {
      title: "",
      url: "",
    };
  },
  methods: {
    handleSubmit() {
      this.postBookmark({
        title: this.title,
        url: this.url,
      });
      this.title = "";
      this.url = "";
    },
    ...mapActions(["postBookmark"]),
  },
};
</script>

<style lang="scss" scoped></style>
