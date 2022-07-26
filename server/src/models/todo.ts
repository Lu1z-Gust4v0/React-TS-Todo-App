import { Schema, model } from "mongoose"
import { ITodo } from "../types/todo"

// Create schema
const todoSchema = new Schema<ITodo>({
    userId: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true},
}, { timestamps: true })

// Create model
const Todo = model<ITodo>("Todo", todoSchema)

// Export
export default Todo
