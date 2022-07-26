import IUser from "../types/user"
import User from "../models/user"


async function queryUsers(filter?: any): Promise<IUser[]> {
    try {
        const users: IUser[] = await User.find(filter)

        return users
    } catch (err: any) {
        throw new Error(err.message || "Failed to query users")
    }
}

async function createUser(data: IUser): Promise<IUser> {
    try {
        // Check if there is an user using the email / username provided
        const sameUsername: IUser[] = await queryUsers({ username: data.username})
        const sameEmail: IUser[] = await queryUsers({ email: data.email})
        
        if (sameUsername.length != 0) {
            throw new Error("This username is already being used")
        }

        if (sameEmail.length != 0) {
            throw new Error("This email is already being used")
        }
        // TODO: Add a safe hash instead of storing the raw password. 
        const newUser = new User({
            username: data.username,
            email: data.email,
            password: data.password
        })
        // Save new user
        await newUser.save()

        return newUser

    } catch (err: any) {
        throw new Error(err.message || "Failed to create a new user.")
    }
}


export { queryUsers, createUser }