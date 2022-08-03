import axios, { AxiosResponse } from "axios"
import { AuthSystemResponse, LoginFormData, RegisterFormData } from "../types/customTypes"


const BASE_URL = "http://localhost/"

const registerUser = async (credentials: RegisterFormData): Promise<AuthSystemResponse> => {
    try {
        if (credentials.password !== credentials.repeatPassword) {
            throw new Error("Passwords don't match")
        }

        const response: AxiosResponse<AuthSystemResponse> = await axios.post(`${BASE_URL}/login`, {
            username: credentials.username,
            email: credentials.email,
            password: credentials.password
        })
        
        if (response.status !== 201) {
            throw new Error(response.data.message)
        }

        return response.data

    } catch (err: any) {
        throw new Error(err.message || "Unknown error")
    }
}

const logUserIn = async (credentials: LoginFormData): Promise<AuthSystemResponse> => {
    try {
        const response: AxiosResponse<AuthSystemResponse> = await axios.post(`${BASE_URL}/login`, credentials)

        if (response.status !== 200) {
            throw new Error(response.data.message)
        }

        return response.data
    } catch (err: any) {
        throw new Error(err.message || "Unknown error")
    }
}

export { registerUser, logUserIn }