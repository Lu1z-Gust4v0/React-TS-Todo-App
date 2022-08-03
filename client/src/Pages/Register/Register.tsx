import React, { useState } from "react"
import useFormChange from "../../Hooks/useFormChange"
import { RegisterFormData } from "../../types/customTypes"
import RegisterForm from "./RegisterForm"


export default function Register() {
    const [formData, handleChange] = useFormChange<RegisterFormData>({
        "username": "",
        "email": "",
        "password": "",
        "repeatPassword": ""
    })

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {}

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