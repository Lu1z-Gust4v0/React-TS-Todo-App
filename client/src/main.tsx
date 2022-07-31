import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"


const root = document.querySelector("div#root") as HTMLDivElement
    
createRoot(root).render(<App/>)