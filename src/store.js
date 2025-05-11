import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),

  actions: {
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    reset() {
      this.user = null;
      localStorage.removeItem("user");
    },
  },
});
