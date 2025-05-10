import api from "../config/http";

export default {
  async login(form) {
    await api.get("/sanctum/csrf-cookie");

    return api.post("/api/login", form);
  },

  logout() {
    return api.post("/api/logout");
  },

  forgotPassword(form) {
    return api.post("/api/forgot-password", form);
  },

  resetPassword(form) {
    return api.post("/api/reset-password", form);
  },
};
