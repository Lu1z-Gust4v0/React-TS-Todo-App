import React from "react"
import { NavbarProps } from "../types/customTypes"
import reactLogo from "../assets/react-icon.svg"


const Navbar: React.FC<NavbarProps> = ({ username }) => {
    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <img src={reactLogo} alt="" />
                <h2>Todo App</h2>
            </div>
            <ul className="navbar">
                <li><p>Welcome, <span>{username}</span></p></li>
                <li><button>logout</button></li>
            </ul>
        </nav>
    )
}

export default Navbar