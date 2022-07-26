import { Id } from "./todo"

interface IUser {
    _id: Id;
    username: string;
    email: string;
    password: string;
}

export default IUser 