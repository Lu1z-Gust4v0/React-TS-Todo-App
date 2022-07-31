import React, { useState } from "react"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom"
import { LoginComponentProps, LoginFormData } from "../../types/customTypes"


const Login: React.FC<LoginComponentProps> = ({ setUserData }) => {
    
    const [ formData, setFormData ] = useState<LoginFormData>({
        "username": "",
        "password": ""
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent): void => {
        const target = e.target as HTMLInputElement
        
        setFormData(prevValue => {
            return {
                ...prevValue,
                [target.className]: target.value
            }
        })
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setUserData(() => {
            return {
                username: formData.username,
                id: formData.password,
                loggedIn: true
            }
        })

        navigate("/")
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