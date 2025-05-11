<template>
  <div
    class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex flex-col items-center justify-center p-4"
  >
    <!-- Main Container with Glass Effect -->
    <div class="w-full max-w-md">
      <!-- Logo/Brand Section -->
      <div class="text-center mb-8">
        <div
          class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg"
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
    </div>

    <!-- Login Card -->
    <div
      class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl w-full max-w-md"
    >
      <div class="text-center">
        <h2
          class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Welcome Back
        </h2>
        <p class="text-gray-500 mt-2">Please sign in to continue</p>
      </div>

      <form class="space-y-6" @submit="login">
        <!-- Email Input -->
        <div class="relative">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            for="email"
          >
            Email Address
          </label>
          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
              type="email"
              id="email"
              placeholder="Enter your email"
              v-model="form.email"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="relative">
          <label
            class="block text-gray-700 text-sm font-medium mb-2"
            for="password"
          >
            Password
          </label>
          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
              type="password"
              id="password"
              placeholder="Enter your password"
              v-model="form.password"
            />
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              type="checkbox"
              id="remember"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label class="ml-2 text-gray-600 text-sm" for="remember">
              Remember me
            </label>
          </div>
          <a
            href="#"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >Forgot password?</a
          >
        </div>

        <!-- Sign In Button -->
        <button
          type="button"
          @click="login"
          class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import user from "../../models/user";
import { authStore } from "../../store";

export default {
  data() {
    return {
      auth: authStore(),
      form: {
        email: "test@example.com",
        password: "test@example.com",
      },
    };
  },

  methods: {
    login() {
      user
        .login(this.form)
        .then((response) => {
          // store user
          this.auth.setUser(response.data.user);

          return this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          // handle error
        });
    },
  },
};
</script>
