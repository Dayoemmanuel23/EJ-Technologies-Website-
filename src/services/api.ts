import axios from 'axios';

// services/api.ts

// This checks both the standard Vite meta env and the process.env we defined
const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  submitContact: async (data: { name: string; email: string; service: string; message: string }) => {
    try {
      const response = await apiClient.post('/api/contact', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getContacts: async () => {
    try {
      const response = await apiClient.get('/api/contacts');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const newsletterService = {
  subscribe: async (email: string) => {
    try {
      const response = await apiClient.post('/api/subscribe', { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getSubscribers: async () => {
    try {
      const response = await apiClient.get('/api/subscribers');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/api/health');
    return response.data;
  } catch (error) {
    throw error;
  }
};
