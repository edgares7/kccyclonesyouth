<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/main";
</style>
