import React, { useState } from "react"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom"
import { LoginComponentProps, LoginFormData } from "../../types/customTypes"
import useFormChange from "../../Hooks/useFormChange"
import { logUserIn } from "../../services/user"


const Login: React.FC<LoginComponentProps> = ({ setUserData }) => {
    
    const [formData, handleChange] = useFormChange<LoginFormData>({
        "username": "",
        "password": ""
    })

    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const { user, message } = await logUserIn(formData)
            
            setUserData(() => {
                return {
                    username: user.username,
                    id: user._id,
                    loggedIn: true
                }
            })
            window.alert(message)
            // redirect user to home page
            navigate("/")            
        } catch (err: any) {
            window.alert(err.message || "Unknown error")
        }
    }

    return (
        <section className="login-page">
            <LoginForm 
                handleChange={handleChange}
                handleLogin={handleLogin}
                data={formData}
            />
        </section>
    ) 
}

export default Login 