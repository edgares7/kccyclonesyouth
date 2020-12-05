<template>
  <div class="flex flex-col items-center justify-center mb-10">
    <div class="header h-80 w-screen flex items-center justify-center">
      <h1
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        Meet the Coaches
      </h1>
    </div>
    <div
      class="body grid sm:grid-cols-2 grid-cols-1 gap-10 md:gap-20 sm:gap-32"
    >
      <router-link to="/coaches/jeff">
        <Card
          :image="'jeff.jpg'"
          :alt="'Image of Coach Jeff'"
          :name="'Coach Jeff'"
        />
      </router-link>
      <router-link to="/coaches/henrique">
        <Card
          :image="'user.png'"
          :alt="'Default User Image'"
          :name="'Coach Henrique'"
        />
      </router-link>
      <router-link to="/coaches/edgar">
        <Card
          :image="'user.png'"
          :alt="'Default User Image'"
          :name="'Coach Edgar'"
        />
      </router-link>
      <router-link to="/coaches/jesse">
        <Card
          :image="'user.png'"
          :alt="'Default User Image'"
          :name="'Coach Jesse'"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Coaches",
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: #103597;
}
</style>
