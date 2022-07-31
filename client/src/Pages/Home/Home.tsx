import React from "react"
import { HomeComponentProps } from "../../types/customTypes"


const Home: React.FC<HomeComponentProps> = ({ data }) => {
    return (
        <h1>{ JSON.stringify(data) }</h1>
    )
}

export default Home