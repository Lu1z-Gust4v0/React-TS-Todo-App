import { Request, Response } from "express"
import ITodo from "../../types/todo"
import { 
    queryTodos, 
    createTodo, 
    deleteTodo, 
    updateTodo, 
    UpdateData 
} from "../../services/todoDocument"


async function getTodosController(req: Request, res: Response): Promise<void> {
    try {
        
        const id: string = req.params.id
        const todos: ITodo[] = await queryTodos({ userId: id })

        res.status(200).json({
            message: "Todos fetched sucessfully",
            todos: todos 
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown Error"
        })    
    }

}

async function addTodoController(req: Request, res: Response): Promise<void> {
    try {
        const data = req.body as Pick<ITodo, "userId" | "title" | "description" | "status">
        
        const newTodo: ITodo = await createTodo(data)
        const todos: ITodo[] = await queryTodos()

        res.status(201).json({
            message: "Todo created sucessfully",
            newTodo: newTodo, 
            todos: todos
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown Error"
        })
    }
}

async function deleteTodoController(req: Request, res: Response): Promise<void> {
    try {
        const id: string = req.params.id
        
        const deletedTodo: ITodo | null = await deleteTodo(id)                
        const todos: ITodo[] = await queryTodos()

        res.status(200).json({
            message: "Todo deleted sucessfully",
            deletedTodo: deletedTodo,
            todos: todos
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown Error"
        })
    }
}

async function updateTodoController(req: Request, res: Response): Promise<void> {
    try {    
        const id: string = req.params.id 
        const data: UpdateData = req.body

        const updatedTodo: ITodo | null = await updateTodo(data, id)
        const todos: ITodo[] = await queryTodos()

        res.status(200).json({
            message: "Todo updated sucessfully",
            updatedTodo: updatedTodo,
            todos: todos
        })

    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Unknown Error"
        })
    }
}

export { getTodosController, addTodoController, deleteTodoController, updateTodoController }