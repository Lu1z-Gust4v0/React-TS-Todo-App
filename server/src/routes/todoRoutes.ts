import { Router } from "express"
import { 
    getTodosController, 
    addTodoController, 
    updateTodoController,
    deleteTodoController 
} from "../controllers/todos/index"


const router: Router = Router()

router.get("/get-todos", getTodosController)

router.post("/add-todo", addTodoController)

router.post("/delete-todo/:id", deleteTodoController)

router.put("/edit-todo/:id", updateTodoController)

export { router as todoRouter }