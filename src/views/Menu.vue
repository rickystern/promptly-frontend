<template>
  <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center text-indigo-600">
      Email Templates
    </h2>

    <p class="mb-6 text-gray-600">
      Select the email templates you'd like to send to {{ customerData.email }}.
    </p>

    <div class="space-y-6">
      <!-- Onboarding Emails -->
      <div class="border rounded-lg p-4 bg-gray-50">
        <button
          @click="toggleDropdown('onboarding')"
          class="w-full flex justify-between items-center py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
        >
          <span class="font-medium">Onboarding Emails</span>
          <svg
            :class="{ 'rotate-180': dropdowns.onboarding }"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          v-if="dropdowns.onboarding"
          class="mt-2 bg-white border rounded-md shadow-sm p-2"
        >
          <div
            v-for="(template, index) in onboardingTemplates"
            :key="index"
            class="py-1"
          >
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                v-model="selectedTemplates.onboarding"
                :value="template"
                class="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{{ template.name }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Marketing Emails -->
      <div class="border rounded-lg p-4 bg-gray-50">
        <button
          @click="toggleDropdown('marketing')"
          class="w-full flex justify-between items-center py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
        >
          <span class="font-medium">Marketing Emails</span>
          <svg
            :class="{ 'rotate-180': dropdowns.marketing }"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          v-if="dropdowns.marketing"
          class="mt-2 bg-white border rounded-md shadow-sm p-2"
        >
          <div
            v-for="(template, index) in marketingTemplates"
            :key="index"
            class="py-1"
          >
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                v-model="selectedTemplates.marketing"
                :value="template"
                class="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{{ template.name }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Notification Emails -->
      <div class="border rounded-lg p-4 bg-gray-50">
        <button
          @click="toggleDropdown('notification')"
          class="w-full flex justify-between items-center py-2 px-4 bg-white border rounded-md shadow-sm hover:bg-gray-100"
        >
          <span class="font-medium">Notification Emails</span>
          <svg
            :class="{ 'rotate-180': dropdowns.notification }"
            class="w-5 h-5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          v-if="dropdowns.notification"
          class="mt-2 bg-white border rounded-md shadow-sm p-2"
        >
          <div
            v-for="(template, index) in notificationTemplates"
            :key="index"
            class="py-1"
          >
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                v-model="selectedTemplates.notification"
                :value="template"
                class="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{{ template.name }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Templates Summary -->
    <!-- Selected Templates Summary -->
    <div
      v-if="hasSelectedTemplates"
      class="mt-6 p-4 border rounded-lg bg-gray-50"
    >
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-lg">Selected Templates</h3>
        <button
          @click="clearAllTemplates"
          class="text-red-500 hover:text-red-700 text-sm flex items-center"
        >
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear All
        </button>
      </div>
      <ul class="space-y-1">
        <li
          v-for="(template, index) in allSelectedTemplates"
          :key="index"
          class="flex justify-between"
        >
          <span>{{ template.name }}</span>
          <button
            @click="removeTemplate(template)"
            class="text-red-500 hover:text-red-700"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div class="mt-3 pt-3 border-t">
        <span class="font-medium"
          >Total templates: {{ allSelectedTemplates.length }}</span
        >
      </div>
    </div>

    <div class="mt-6">
      <button
        @click="sendEmails"
        class="w-full bg-red-500 text-black py-2 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-300 transition duration-300 ease-in-out"
        :disabled="!hasSelectedTemplates"
      >
        Send Emails
      </button>
    </div>
  </div>
</template>

<script setup>
import interaction from "../models/Interaction";

import { ref, computed, onMounted, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

// const props = defineProps({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });

// User data from localStorage
const customerData = ref({
  firstName: "",
  lastName: "",
  email: "",
});

onMounted(() => {
  try {
    // Get data from localStorage
    const storedData = localStorage.getItem("customerData");

    if (storedData) {
      // Parse the JSON data
      const parsedData = JSON.parse(storedData);
      customerData.value = parsedData;
      console.log("User data loaded from localStorage:", customerData.value);
    } else {
      console.warn("No user data found in localStorage");
      // Optional: redirect back to form if no data found
      // router.push('/');
    }
  } catch (error) {
    console.error("Error loading user data from localStorage:", error);
  }
});

// Dropdown state
const dropdowns = ref({
  onboarding: false,
  marketing: false,
  notification: false,
});

// Toggle dropdown visibility
const toggleDropdown = (category) => {
  dropdowns.value[category] = !dropdowns.value[category];
};

// Email templates
const onboardingTemplates = [
  { id: "welcome", name: "Welcome Email", templateId: "onb-001" },
  {
    id: "getting-started",
    name: "Getting Started Guide",
    templateId: "onb-002",
  },
  {
    id: "account-setup",
    name: "Account Setup Instructions",
    templateId: "onb-003",
  },
  { id: "first-steps", name: "First Steps Tutorial", templateId: "onb-004" },
];

const marketingTemplates = [
  { id: "product-update", name: "Product Update", templateId: "mkt-001" },
  { id: "special-offer", name: "Special Offer", templateId: "mkt-002" },
  { id: "newsletter", name: "Monthly Newsletter", templateId: "mkt-003" },
  { id: "webinar-invite", name: "Webinar Invitation", templateId: "mkt-004" },
];

const notificationTemplates = [
  { id: "password-reset", name: "Password Reset", templateId: "not-001" },
  {
    id: "account-verification",
    name: "Account Verification",
    templateId: "not-002",
  },
  {
    id: "payment-confirmation",
    name: "Payment Confirmation",
    templateId: "not-003",
  },
  {
    id: "subscription-renewal",
    name: "Subscription Renewal",
    templateId: "not-004",
  },
];

// Selected templates
const selectedTemplates = ref({
  onboarding: [],
  marketing: [],
  notification: [],
});

// Computed properties
const allSelectedTemplates = computed(() => {
  return [
    ...selectedTemplates.value.onboarding,
    ...selectedTemplates.value.marketing,
    ...selectedTemplates.value.notification,
  ];
});

const hasSelectedTemplates = computed(() => {
  return allSelectedTemplates.value.length > 0;
});

// Remove a template from selection
const removeTemplate = (template) => {
  // Check each category to find and remove the template
  for (const category in selectedTemplates.value) {
    const index = selectedTemplates.value[category].findIndex(
      (t) => t.id === template.id
    );
    if (index !== -1) {
      selectedTemplates.value[category].splice(index, 1);
      break;
    }
  }
};

// Clear all selected templates
const clearAllTemplates = () => {
  // Clear all selected templates
  selectedTemplates.value = {
    onboarding: [],
    marketing: [],
    notification: [],
  };
};

// Send emails
const sendEmails = async () => {
  try {
    // Show loading state
    const isLoading = ref(true);

    // Prepare the data to send to your backend
    const emailData = {
      first_name: customerData.value.firstName,
      last_name: customerData.value.lastName,
      email: customerData.value.email,

      template_ids: allSelectedTemplates.value.map(
        (template) => template.templateId
      ),
    };

    console.log("Sending email templates:", emailData);

    let result = null;

    interaction
      .createInteraction(emailData)
      .then((response) => {
        console.log("Email sent successfully:", response);

        result = response.data; // Assuming the response contains the data you need

        // Show success message
        alert(
          `Success! ${allSelectedTemplates.value.length} email templates have been sent to ${customerData.value.email}`
        );

        // Clear selected templates after successful send
        // clearAllTemplates();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          `Error: ${
            error.message ||
            "There was an error sending the emails. Please try again."
          }`
        );
      });

    // // Make the API request
    // const response = await fetch(
    //   "https://promptly.test/api/customers/interactions/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       // Add any authentication headers if needed
    //       // 'Authorization': `Bearer ${yourAuthToken}`
    //     },
    //     body: JSON.stringify(emailData),
    //   }
    // );

    // // Check if the request was successful
    // if (!response.ok) {
    //   // Get error details from response if available
    //   let errorDetails = "";
    //   try {
    //     const errorData = await response.json();
    //     errorDetails = errorData.message || "";
    //   } catch (e) {
    //     // If response isn't JSON, use status text
    //     errorDetails = response.statusText;
    //   }

    //   throw new Error(`Failed to send emails. ${errorDetails}`);
    // }

    // // Parse the successful response
    // const result = await response.json();

    // console.log("API response:", result);

    // Optionally navigate to a confirmation page
    // router.push("/confirmation");
  } catch (error) {
    console.error("Error sending emails:", error);
    alert(
      `Error: ${
        error.message ||
        "There was an error sending the emails. Please try again."
      }`
    );
  } finally {
    // Reset loading state
    isLoading.value = false;
  }
};
</script>
