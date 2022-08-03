import axios, { AxiosResponse } from "axios"
import { ApiDataType, ITodo } from "../types/customTypes"


const BASE_URL = "http://localhost:4000"

const getTodos = async (userId: string): Promise<ApiDataType> => {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.get(`${BASE_URL}/get-todos/${userId}`)

        if (response.status !== 200) {
            throw new Error(response.data.message)
        }

        return response.data


    } catch (err: any) {
        throw new Error(err.message || "Unknown error")
    }
}

const addTodo = async (data: Pick<ITodo, "userId" | "title" | "description">): Promise<ApiDataType> => {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.post(`${BASE_URL}/add-todo`, {
            "userId": data.userId,
            "title": data.title,
            "description": data.description,
            "status": true
        }) 

        if (response.status !== 201) {
            throw new Error(response.data.message)
        }

        return response.data

    } catch (err: any) {
        throw new Error(err.message || "Unknown error")            
    }
}

const deleteTodo = async (id: string): Promise<ApiDataType> => {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.post(`${BASE_URL}/delete-todo/${id}`)

        if (response.status !== 200) {
            throw new Error(response.data.message)
        }

        return response.data

    } catch (err: any) {
        throw new Error(err.message || "Unknown error")            
    }
} 

const updateTodo = async (id: string, status: boolean): Promise<ApiDataType> => {
    try {
        const response: AxiosResponse<ApiDataType> = await axios.post(`${BASE_URL}/edit-todo/${id}`, {
            status: status
        })

        if (response.status !== 200) {
            throw new Error(response.data.message)
        }

        return response.data

    } catch (err: any) {
        throw new Error(err.message || "Unknown error")            
    }
}

export { getTodos, addTodo, deleteTodo, updateTodo }