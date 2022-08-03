import { Request, Response } from "express"
import IUser from "../../types/user"
import { queryUsers, createUser } from "../../services/userDocument"


async function registerController(req: Request, res: Response): Promise<void> {
    try {
        const data = req.body as Pick<IUser, "username" | "email" | "password">

        const newUser: IUser = await createUser(data)

        res.status(201).json({
            message: "Registered sucessfully",
            user: newUser
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown error"
        })
    }
}

async function loginController(req: Request, res: Response): Promise<void> {
    try {
        const credentials = req.body as Pick<IUser, "username" | "password">
        
        const users: IUser[] = await queryUsers()

        const user = users.find((user) => user.username === credentials.username)

        if (!user) {
            throw new Error(`User ${credentials.username} does not exist`)
        }

        if (user.password !== credentials.password) {
            throw new Error("Incorrect password")
        }

        res.status(200).json({
            message: "Login sucessful",
            user: user
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown error"
        })
    }
}


export { registerController, loginController }