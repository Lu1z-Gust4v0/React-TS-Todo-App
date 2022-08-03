import React from "react"
import Navbar from "../../Components/Navbar"
import { HomeComponentProps } from "../../types/customTypes"


const Home: React.FC<HomeComponentProps> = ({ data }) => {
    return (
        <section className="home-page">
            <Navbar username={data.username} />
            <main className="main-section">
                
            </main>
        </section>
    )
}

export default Home