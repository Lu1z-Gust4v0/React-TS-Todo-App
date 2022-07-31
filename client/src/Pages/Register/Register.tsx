import React, { useState } from "react"
import { RegisterFormData } from "../../types/customTypes"
import RegisterForm from "./RegisterForm"


export default function Register() {
    const [formData, setFormData] = useState<RegisterFormData>({
        "username": "",
        "email": "",
        "password": "",
        "repeatPassword": ""
    })
    
    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement

        setFormData(prevValue => {
            return {
                ...prevValue,
                [target.className]: target.value
            }
        })
    }

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