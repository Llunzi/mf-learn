<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "HomeView",
  components: {},
  mounted() {
    console.log(
      "AboutView = ",
      this,
      ", Vue = ",
      Vue,
      Vue.prototype === this.prototype
    );
  },
};
</script>