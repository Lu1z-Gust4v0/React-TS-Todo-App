import React from "react"
import { NavbarProps } from "../types/customTypes"
import reactLogo from "../assets/react-icon.svg"
import { useNavigate } from "react-router-dom"

const Navbar: React.FC<NavbarProps> = ({ username }) => {
    
    const navigate = useNavigate()
    const logoutUser = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <img src={reactLogo} alt="" />
                <h2>Todo App</h2>
            </div>
            <ul className="navbar">
                <li><p>Welcome, <span>{username}</span></p></li>
                <li><button onClick={logoutUser}>logout</button></li>
            </ul>
        </nav>
    )
}

export default Navbar