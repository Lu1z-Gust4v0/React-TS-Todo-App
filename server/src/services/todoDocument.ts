import ITodo from "../types/todo";
import Todo from "../models/todo";


type UpdateData = {
    title?: string;
    description?: string;
    status?: boolean;
}

async function queryTodos(filter?: any): Promise<ITodo[]> {
    try {
        const todos: ITodo[] = await Todo.find(filter)

        return todos
    } catch (err: any) {
        throw new Error(err.message || "Failed to query todos")
    }
}

async function createTodo(data: ITodo): Promise<ITodo> {
    try {

        const todo = new Todo({
            userId: data.userId,
            title: data.title,
            description: data.description,
            status: data.status
        })

        const newTodo = await todo.save()

        return newTodo

    } catch (err: any) {
        throw new Error(err.message || "Failed to create todo")
    }
}

async function deleteTodo(id: string): Promise<ITodo | null> {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove({ _id: id})

        return deletedTodo

    } catch(err: any) {
        throw new Error(err.message || "Failed to delete todo")
    }
}

async function updateTodo(data: UpdateData, id: string): Promise<ITodo | null> {
    try {
        const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, data)

        return updatedTodo

    } catch(err: any) {
        throw new Error(err.message || "Failed to update todo")
    }
}

export { queryTodos, createTodo, deleteTodo, updateTodo, UpdateData }