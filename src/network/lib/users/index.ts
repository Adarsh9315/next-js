// src/services/userService.ts
import type { AxiosResponse } from 'axios'
import { axiosClient1, axiosClient2 } from '_network/apiClient'

// Define the structure of the user object (adjust according to your actual data structure)
interface User {
  id: number
  name: string
  // ... other user fields
}

// Define the structure of the request data for registration and login
interface RegisterData {
  username: string
  email: string
  password: string
  // ... other registration fields
}

interface LoginData {
  username: string
  password: string
}

// Function to get users
export const users = async (): Promise<AxiosResponse<User[]>> => {
  return await axiosClient1.get('/users/get-users')
}

// Function to register a new user
export const register = async (data: RegisterData): Promise<AxiosResponse<User>> => {
  return await axiosClient2.post('/users/register', JSON.stringify(data))
}

// Function to login
export const login = async (data: LoginData): Promise<AxiosResponse<{ token: string }>> => {
  return await axiosClient1.post('/users/login', JSON.stringify(data))
}
