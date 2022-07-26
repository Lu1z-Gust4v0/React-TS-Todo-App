import IUser from "../types/user"
import User from "../models/user"
import { Id } from "../types/todo"


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

async function getUserId(_username: string): Promise<Id> {
    try {

        const user: IUser[] = await queryUsers({ username: _username})

        // Throw an error if the query returns an empty array
        if (user.length == 0) {
            throw new Error(`${_username} is not a valid username`)
        }

        return user[0]._id

    } catch (err: any) {
        throw new Error(err.message || "Failed to get user id.")
    }
}

export { queryUsers, createUser, getUserId }