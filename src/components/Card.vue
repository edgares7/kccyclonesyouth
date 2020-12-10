<template>
  <div class="m-5">
    <div class="w-80 rounded-lg overflow-hidden shadow-lg bg-white">
      <div
        class="relative z-10"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));"
      >
        <img class="w-full" :src="resolve_img_url(image)" :alt="alt" />
      </div>
      <div class="pt-6 pb-8 text-gray-600 text-center">
        <h2>{{ name }}</h2>
      </div>
      <div
        class="relative flex justify-center items-center flex-row px-6 z-50 m-5"
      >
        <button
          class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white learn"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
      type: String
    },
    alt: {
      type: String
    },
    name: {
      type: String
    }
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/images", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>

<style lang="scss" scoped>
.learn {
  background-color: #103597;
}
</style>
