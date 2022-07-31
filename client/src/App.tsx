import React, { useState } from "react"
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Navigate 
} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import "./styles/styles.css"


export default function App() {
    
    const [ userData, setUserData ] = useState({
        "username": " ",
        "userId": " ",
        "loggedIn": false
    })
    
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={userData.loggedIn ? <Home/> : <Navigate to="/login"/>}
                />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}