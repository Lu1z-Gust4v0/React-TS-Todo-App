import React, { useState } from "react"
import userIcon from "../../assets/user-icon.svg" 
import lockIcon from "../../assets/lock-icon.svg"


export function LoginForm() {

    const [ formData, setFormData ] = useState({"username": "", "password": ""})

    function handleChange(e: React.ChangeEvent) {
        const target = e.target as HTMLInputElement

        setFormData((prevValue) => {
            return {
                ...prevValue,
                [target.className]: target.value 
            }
        })
    }
    
    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // TODO: check credentials and log user in if they are correct
        window.alert(JSON.stringify(formData))
    }

    return (
        <section className="login-form-container">
            <h1 className="form-title">Login</h1>            
            <form 
                className="login-form" 
                autoComplete="off" 
                onSubmit={handleLogin}
            >
                <div className="form-row">
                    <label htmlFor="username">username</label>
                    <div className="form-sub-row">
                        <img className="user-icon" src={userIcon} alt="avatar icon" />
                        <input 
                            className="username" 
                            id="username" 
                            type="text" 
                            placeholder="Type your username"
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="password">password</label>
                    <div className="form-sub-row">
                        <img className="lock-icon" src={lockIcon} alt="padlock icon" />
                        <input 
                            className="password" 
                            id="password" 
                            type="password" 
                            placeholder="Type your password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit">login</button>
                </div>
            </form>
            <p>does not have an account? <a href="#">sign up</a></p>
        </section>
    )
}