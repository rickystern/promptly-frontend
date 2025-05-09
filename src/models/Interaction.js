import api from "../config/http";
// This file contains the API service functions for customer interactions.

export default {
  // Create a new interaction
  createInteraction(data) {
    return api.post("/customers/interactions", data);
  },

  //   // Get all customers
  //   getCustomers() {
  //     return api.get("/customers");
  //   },

  //   // Get a specific customer
  //   getCustomer(id) {
  //     return api.get(`/customers/${id}`);
  //   },

  //   // Update a customer
  //   updateCustomer(id, data) {
  //     return api.put(`/customers/${id}`, data);
  //   },

  //   // Delete a customer
  //   deleteCustomer(id) {
  //     return api.delete(`/customers/${id}`);
  //   },
};
