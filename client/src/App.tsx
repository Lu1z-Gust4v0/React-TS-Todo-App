import React, { useState } from "react"
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Navigate 
} from "react-router-dom"
import { UserData } from "./types/customTypes"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import "./styles/styles.css"
import usePersistingState from "./Hooks/usePersistingState"


export default function App() {
    const [ userData, setUserData ] = usePersistingState<UserData>("userData", {
        "username": " ",
        "id": " ",
        "loggedIn": false
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={userData.loggedIn ? <Home data={userData}/> : <Navigate to="/login"/>}
                />
                <Route path="/login" element={<Login setUserData={setUserData}/>}/>
                <Route path="/register" element={<Register setUserData={setUserData}/>}/>
            </Routes>
        </BrowserRouter>
    )
}