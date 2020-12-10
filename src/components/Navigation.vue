<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-20 w-auto sm:h-20"
                src="@/assets/images/logo.png"
                alt="KC Cyclones Logo"
              />
            </router-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="menuExpand = true"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <router-link to="/about">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Our Story
              </span>
            </router-link>
            <router-link to="/coaches">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Meet the Coaches
              </span>
            </router-link>
            <router-link to="/get-involved">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Get Involved
              </span>
            </router-link>
            <router-link to="/board">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Meet the Board
              </span>
            </router-link>
            <router-link to="/foundation">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About the Foundation
              </span>
            </router-link>
            <router-link to="/contact">
              <span
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </span>
            </router-link>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://www.gofundme.com/f/refugee-soccer-transport-amp-expansion?fbclid=IwAR0cQT7eLFc5sa2-ivFL-nyM_tWYjdQ7cYv5T698XIgnq-LCXvOF7rNQ1vk"
              target="_blank"
            >
              <button
                class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white donate"
              >
                Donate
              </button>
            </a>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <transition name="nav">
        <div
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
          v-if="menuExpand"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <router-link to="/">
                  <img
                    class="h-20 w-auto"
                    src="@/assets/images/logo.png"
                    alt="kC Cyclones Logo"
                  />
                </router-link>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click="menuExpand = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <router-link
                    to="/about"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Our Story
                    </span>
                  </router-link>

                  <router-link
                    to="/coaches"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Meet the Coaches
                    </span>
                  </router-link>

                  <router-link
                    to="/get-involved"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Get Involved
                    </span>
                  </router-link>

                  <router-link
                    to="/board"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Met the Board
                    </span>
                  </router-link>
                  <router-link
                    to="/foundation"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      About the Foundation
                    </span>
                  </router-link>
                  <router-link
                    to="/contact"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </router-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div>
                <a
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white donate"
                  href="https://www.gofundme.com/f/refugee-soccer-transport-amp-expansion?fbclid=IwAR0cQT7eLFc5sa2-ivFL-nyM_tWYjdQ7cYv5T698XIgnq-LCXvOF7rNQ1vk"
                  target="_blank"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuExpand: false
    };
  }
};
</script>

<style lang="scss" scoped>
.donate {
  background-color: #103597;
  &:hover {
    background-color: rgba($color: #103597, $alpha: 0.9);
  }
}

.nav-enter-active {
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}
.nav-leave-active {
  transition: all 200ms cubic-bezier(0.4, 0, 1, 1);
}
.nav-enter,
.nav-leave-to {
  opacity: 0;
}
</style>
