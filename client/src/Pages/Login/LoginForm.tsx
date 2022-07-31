import React from "react"
import { Link } from "react-router-dom"
import userIcon from "../../assets/user-icon.svg" 
import lockIcon from "../../assets/lock-icon.svg"
import { LoginFormProps } from "../../types/customTypes"


const LoginForm: React.FC<LoginFormProps> = ({ data, handleChange, handleLogin }) => {
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
                            value={data.username}
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
                    <button type="submit">login</button>
                </div>
            </form>
            <p>does not have an account? <Link to={"/register"}>sign up</Link></p>
        </section>
    )
}

export default LoginForm