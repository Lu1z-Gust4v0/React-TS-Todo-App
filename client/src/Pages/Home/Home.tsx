import React, { useState } from "react"
import Navbar from "../../Components/Navbar"
import { HomeComponentProps } from "../../types/customTypes"
import TodoBoard from "./TodoBoard"

const Home: React.FC<HomeComponentProps> = ({ data }) => {
    const [active, setActive] = useState(false)
    
    const togglePopUp = () => {
        setActive((prevState) => !prevState)
    }

    const props = {
        userId: data.id,
        active: active,
        togglePopUp: togglePopUp
    }


    return (
        <section className="home-page">
            <Navbar username={data.username} />
            <main className="main-section">
                <TodoBoard {...props}/>
            </main>
        </section>
    )
}

export default Home