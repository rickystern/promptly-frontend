<template>
  <!-- auth layout -->
  <div
    v-if="auth.user"
    class="h-screen w-screen flex x-overflow-hidden bg-red-100"
  >
    <!-- Side Navigation - Full height, fixed width -->
    <div
      class="bg-white border-r border-gray-200 h-screen flex flex-col shrink-0"
    >
      <!-- App Logo/Title -->
      <div class="px-6 py-5 flex items-center border-gray-200">
        <div
          class="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 class="font-semibold text-gray-800">Promptly</h1>
      </div>

      <!-- Navigation Links - Full width items -->
      <nav class="flex-1 py-4 overflow-y-auto">
        <div class="mb-6">
          <p
            class="text-xs font-medium text-gray-400 uppercase tracking-wider px-6 mb-2"
          >
            Main
          </p>
          <ul>
            <li>
              <router-link
                :to="{ name: 'dashboard' }"
                class="flex items-center px-6 py-3 text-sm font-medium w-full transition-colors"
                :class="
                  $route.name === 'dashboard'
                    ? 'text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  :class="
                    $route.name === 'dashboard'
                      ? 'text-indigo-500'
                      : 'text-gray-500'
                  "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact-log"
                class="flex items-center px-6 py-3 text-sm font-medium w-full transition-colors"
                :class="
                  $route.path === '/contact-log'
                    ? 'text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  :class="
                    $route.path === '/contact-log'
                      ? 'text-indigo-500'
                      : 'text-gray-500'
                  "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  />
                </svg>
                Contact Log
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Optional second section -->
        <div>
          <p
            class="text-xs font-medium text-gray-400 uppercase tracking-wider px-6 mb-2"
          >
            Settings
          </p>
          <ul>
            <li>
              <a
                href="#"
                class="flex items-center px-6 py-3 text-sm font-medium text-gray-700 w-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Preferences
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- User Profile - Full width -->
      <div class="px-6 py-4 border-t border-gray-200 mt-auto">
        <div class="flex items-center">
          <div
            class="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-3"
          >
            <span class="text-sm font-medium text-white uppercase">{{
              getInitials(auth.user.name)
            }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-700 truncate">
              {{ auth.user.name }}
            </p>
            <p class="text-xs text-gray-500 truncate">{{ auth.user.email }}</p>
          </div>
          <button
            @click="logout"
            type="button"
            class="ml-2 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Full width and height -->
    <div class="flex-1 flex flex-col x-overflow-hidden">
      <!-- Header - Full width -->
      <header
        class="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between h-16"
      >
        <h2 class="text-lg font-medium text-gray-800">{{ getPageTitle }}</h2>

        <!-- Search bar -->
        <div class="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <div class="absolute left-3 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>

      <!-- Main Content Area - Takes all remaining space -->
      <main class="flex-1 bg-gray-100">
        <div class="h-full w-full p-6">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>

  <slot v-else></slot>
</template>

<script>
import { authStore } from "../store";
import user from "../models/user";
export default {
  name: "App",

  data() {
    return {
      auth: authStore(),
    };
  },

  computed: {
    getPageTitle() {
      return this.$route.meta.title ?? "";
    },
  },

  methods: {
    getInitials(fullName) {
      const nameParts = fullName.split(" "); // Split the name into words
      let initials = "";

      // Take the first letter of the first two words
      for (let i = 0; i < 2; i++) {
        if (nameParts[i]) {
          initials += nameParts[i][0].toUpperCase(); // Add the first letter to initials
        }
      }

      return initials;
    },

    logout() {
      user
        .logout()
        .then((response) => {
          this.auth.reset();
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          // handle error
        });
    },
  },
};
</script>
