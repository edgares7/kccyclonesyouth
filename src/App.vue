<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/main";
</style>
