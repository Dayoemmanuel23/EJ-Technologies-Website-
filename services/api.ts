import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

console.log('API_URL:', API_URL);

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  submitContact: async (data: { name: string; email: string; service: string; message: string }) => {
    try {
      console.log('Submitting contact form:', data);
      console.log('Full URL:', `${API_URL}/api/contact`);
      const response = await apiClient.post('/api/contact', data);
      console.log('Contact response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Contact submission error:', error.response?.data || error.message);
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
