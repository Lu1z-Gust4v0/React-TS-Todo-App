import React, { useState } from "react"
import useFormChange from "../../Hooks/useFormChange"
import { registerUser } from "../../services/user"
import { RegisterComponentProps, RegisterFormData } from "../../types/customTypes"
import { useNavigate } from "react-router-dom"
import RegisterForm from "./RegisterForm"


const Register: React.FC<RegisterComponentProps> = ({ setUserData }) => {
    const [formData, handleChange] = useFormChange<RegisterFormData>({
        "username": "",
        "email": "",
        "password": "",
        "repeatPassword": ""
    })

    const navigate = useNavigate()

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const { user, message } = await registerUser(formData)
            
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
        <section className="register-page">
            <RegisterForm 
                handleChange={handleChange}
                handleRegister={handleRegister}
                data={formData}        
            />
        </section>
    )
}

export default Register