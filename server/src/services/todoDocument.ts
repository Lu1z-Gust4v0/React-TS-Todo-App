import ITodo from "../types/todo";
import Todo from "../models/todo";


async function queryTodos(filter?: any): Promise<ITodo[]> {
    try {
        const todos: ITodo[] = await Todo.find(filter)

        return todos
    } catch (err: any) {
        throw new Error(err.message || "Failed to query todos")
    }
}

async function createTodo(data: ITodo): Promise<void> {
    try {

        const newTodo = new Todo({
            title: data.title,
            description: data.description,
            status: data.status
        })

        await newTodo.save()

    } catch (err: any) {
        throw new Error(err.message || "Failed to create todo")
    }
}

async function deleteTodo(id: number): Promise<ITodo | null> {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(id)

        return deletedTodo

    } catch(err: any) {
        throw new Error(err.message || "Failed to delete todo")
    }
}

async function updateTodo(newData: ITodo, id: number): Promise<ITodo | null> {
    try {
        const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, newData)

        return updatedTodo

    } catch(err: any) {
        throw new Error(err.message || "Failed to update todo")
    }
}