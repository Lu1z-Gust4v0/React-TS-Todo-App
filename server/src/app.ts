import express, { Express } from "express"
import { connect } from "mongoose"
import { todoRouter } from "./routes/todoRoutes"
import { userRouter } from "./routes/userRoutes"


const app: Express = express()
const port: number = 4000
const uri: string = "mongodb://localhost:27017/test" 

// The `express.json()` middleware parses the body of incoming post requests
// except for HTML form post.
app.use(express.json())

app.use(todoRouter)

app.use(userRouter)

connect(uri).then(() => {
    app.listen(port, () => {
        console.log(`[server]: Server listening at https://localhost:${port}`)
    })
})
.catch(err => {
    throw new Error(err.message || "Unknown error")
})