<template>
  <div
    class="w-2/3 h-40 bg-white flex items-center justify-center my-4 border rounded shadow-xl"
  >
    <a
      href="https://www.gofundme.com/f/refugee-soccer-transport-amp-expansion?fbclid=IwAR0cQT7eLFc5sa2-ivFL-nyM_tWYjdQ7cYv5T698XIgnq-LCXvOF7rNQ1vk"
      target="_blank"
      class="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white donate"
    >
      Donate
    </a>
  </div>
</template>

<script>
export default {
  name: "Donate"
};
</script>

<style lang="scss" scoped>
.donate {
  background-color: #fbd516;
  color: #000000;
  &:hover {
    background-color: rgba($color: #fbd516, $alpha: 0.9);
  }
}
</style>
