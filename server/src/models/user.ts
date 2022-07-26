import { Schema, model } from "mongoose"
import IUser from "../types/user"


// Create schema
const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

// Create model
const User = model<IUser>("User", userSchema)

// Export
export default User