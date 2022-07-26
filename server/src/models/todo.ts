import { Schema, model } from "mongoose"
import ITodo from "../types/ITodo"

// Create schema
const todoSchema = new Schema<ITodo>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true}
})

// Create model
const Todo = model<ITodo>("Todo", todoSchema)

// Export
export default Todo
