import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const contactApi = {
  sendMessage: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/contact/`, data)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}