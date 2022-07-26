import { Types } from "mongoose"

type Id = Types.ObjectId

interface ITodo {
    userId: Id;
    title: string;
    description: string;
    status: boolean;
}

export { ITodo, Id }