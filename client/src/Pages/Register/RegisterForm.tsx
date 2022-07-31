import React from "react"
import { RegisterFormProps } from "../../types/customTypes"
import userIcon from "../../assets/user-icon.svg" 
import lockIcon from "../../assets/lock-icon.svg"
import { Link } from "react-router-dom"


const RegisterForm: React.FC<RegisterFormProps> = ({ handleChange, handleRegister, data}) => {
    return (
        <section className="register-form-container">
            <h1 className="form-title">Register</h1>
            <form 
                className="register-form"
                autoComplete="off"
                onSubmit={handleRegister}
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
                            value={data.username}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="email">email</label>
                    <div className="form-sub-row">
                        <img className="lock-icon" src={lockIcon} alt="padlock icon" />
                        <input 
                            className="email" 
                            id="email" 
                            type="email" 
                            placeholder="Type your email"
                            onChange={handleChange}
                            value={data.email}
                            required
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
                            value={data.password}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="repeat-password">password</label>
                    <div className="form-sub-row">
                        <img className="lock-icon" src={lockIcon} alt="padlock icon" />
                        <input 
                            className="repeatPassword" 
                            id="repeat-password" 
                            type="password" 
                            placeholder="Repeat your password"
                            onChange={handleChange}
                            value={data.repeatPassword}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit">Register</button>
                </div>
            </form>
            <p>Already has an account? <Link className="redirect-link" to={"/login"}>sign in</Link></p>
        </section>
    )
}

export default RegisterForm