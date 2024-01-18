// src/services/axiosClients.ts
import axios from 'axios'
import type { AxiosInstance, AxiosError } from 'axios'

interface ErrorResponse {
  status?: number
  // Add other properties that might be in your error response
}

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.response.use(
    response => response,
    async (error: AxiosError<ErrorResponse>) => {
      // Checking if 'error.response' exists and is of type 'ErrorResponse'
      if (error.response !== null && typeof error.response?.status === 'number') {
        if (error.response?.status === 401) {
          // Handle the 401 error
          alert('Some Error Occurred in API')
        }
      }
      return await Promise.reject(error)
    }
  )

  return instance
}

export const axiosClient1 = createAxiosInstance('https://api.example.com')
export const axiosClient2 = createAxiosInstance('https://api.example.com')
