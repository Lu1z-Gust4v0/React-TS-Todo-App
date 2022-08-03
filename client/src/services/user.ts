import axios, { AxiosResponse } from "axios"
import { AuthSystemResponse, LoginFormData, RegisterFormData } from "../types/customTypes"


const BASE_URL = "http://localhost:4000"

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
        
        return response.data

    } catch (err: any) {
        throw new Error(
            err?.response?.data?.message || err.message || "Uknown error"
        )
    }
}

const logUserIn = async (credentials: LoginFormData): Promise<AuthSystemResponse> => {
    try {
        const response: AxiosResponse<AuthSystemResponse> = await axios.post(`${BASE_URL}/login`, credentials)
        
        return response.data
    } catch (err: any) {
        throw new Error(
            err?.response?.data?.message || err.message || "Uknown error"
        )
    }
}

export { registerUser, logUserIn }