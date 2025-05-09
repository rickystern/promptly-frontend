<template>
  <div id="app" class="flex flex-col h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
      <h2
        class="text-2xl font-bold mb-6 text-center text-black x-text-indigo-600"
      >
        Customer Information
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-600 mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              v-model="firstName"
              type="text"
              :class="[
                'w-full px-3 py-2 border rounded-md focus:ring-indigo-300 focus:border-indigo-300',
                firstNameError ? 'border-red-300' : 'border-gray-200',
              ]"
              placeholder="Enter your first name"
            />
            <p v-if="firstNameError" class="text-red-400 text-xs mt-1">
              {{ firstNameError }}
            </p>
          </div>

          <div class="w-full md:w-1/2">
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-600 mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              v-model="lastName"
              type="text"
              :class="[
                'w-full px-3 py-2 border rounded-md focus:ring-indigo-300 focus:border-indigo-300',
                lastNameError ? 'border-red-300' : 'border-gray-200',
              ]"
              placeholder="Enter your last name"
            />
            <p v-if="lastNameError" class="text-red-400 text-xs mt-1">
              {{ lastNameError }}
            </p>
          </div>
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-600 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            :class="[
              'w-full px-3 py-2 border rounded-md focus:ring-indigo-300 focus:border-indigo-300',
              emailError ? 'border-red-300' : 'border-gray-200',
            ]"
            placeholder="Enter your email"
          />
          <p v-if="emailError" class="text-red-400 text-xs mt-1">
            {{ emailError }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full bg-red-500 text-black py-2 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out"
        >
          Next
        </button>

        <p class="text-sm text-gray-500 text-center mt-4">
          By clicking "Next", you agree to our
          <a href="#" class="text-indigo-600 hover:underline"
            >Terms of Service</a
          >
          and
          <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a
          >.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Menu from "../views/Menu.vue";
import { useRouter } from "vue-router";
const router = useRouter();

// Define reactive variables for form fields and error messages
const firstName = ref("");
const lastName = ref("");
const email = ref("");

const firstNameError = ref("");
const lastNameError = ref("");
const emailError = ref("");

const validateForm = () => {
  firstNameError.value = !firstName.value.trim()
    ? "First name is required"
    : firstName.value.trim().length < 2
    ? "First name must be at least 2 characters"
    : "";

  lastNameError.value = !lastName.value.trim()
    ? "Last name is required"
    : lastName.value.trim().length < 2
    ? "Last name must be at least 2 characters"
    : "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !email.value.trim()
    ? "Email is required"
    : !emailRegex.test(email.value)
    ? "Please enter a valid email address"
    : "";

  return !firstNameError.value && !lastNameError.value && !emailError.value;
};

const handleSubmit = () => {
  if (validateForm()) {
    // Call validateForm only on submit
    console.log("Form is valid. Proceeding...", {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    });

    // Store user data in localStorage
    const customerData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    // Convert to JSON string and store
    localStorage.setItem("customerData", JSON.stringify(customerData));

    console.log("User data saved to localStorage:", customerData);
    // Your navigation logic here (e.g., router.push('/next-screen'))

    // navigation with props to next screen
    router.push({
      name: "Menu",
      // params: {
      //   firstName: firstName.value,
      //   lastName: lastName.value,
      //   email: email.value,
      // },
    });
  } else {
    console.log("Form is invalid. Please correct the errors.");
  }
};
</script>
