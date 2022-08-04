import React, { useState, useEffect } from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"
import { CreateTodoFormData, ITodo, TodoBoardProps } from "../../types/customTypes"
import useFormChange from "../../Hooks/useFormChange"
import { addTodo, getTodos, deleteTodo, updateTodo } from "../../services/todo"


const TodoBoard: React.FC<TodoBoardProps> = ({ userId, active, togglePopUp }) => {    
    const [formData, handleChange] = useFormChange<CreateTodoFormData>({
        "title": "",
        "description": ""
    })
    const [todoList, setTodoList] = useState<ITodo[]>([])

    useEffect(() => {
        const fetchTodos = async (userId: string) => {
            const { todos } = await getTodos(userId) 
            
            setTodoList(todos)
        }

        fetchTodos(userId).catch(console.log)
    }, [])

    
    const createTodo = async () => {
        try {
            const { message } = await addTodo({
                ...formData,
                userId: userId
            })

            togglePopUp()
            window.alert(message)
            window.location.reload()

        } catch (err: any) {
            throw new Error(err.message || "Unknown error")
        }
    }

    const removeTodo = async (id: string) => {
        try {
            const { message } = await deleteTodo(id)

            window.alert(message)
            window.location.reload()

        } catch (err: any) {
            throw new Error(err.message || "Unknown error")
        }
    }

    const toggleTodo = async (id: string, status: boolean) => {
        try {
            const { message } = await updateTodo(id, status)

            window.alert(message)
            window.location.reload()
            
        } catch (err: any) {
            throw new Error(err.message || "Unknown error")
        }
    }

    const todos = todoList.map((todo) => {
        return (
            <TodoItem 
                key={todo._id}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        )
    })

    return (
        <div className={active ? "todo-board active": "todo-board"}>
            <div className="todo-board-row">
                <h2>My todos</h2>
                <button className="create-btn" onClick={togglePopUp}>
                    <img src={createIcon} alt="create icon" />
                </button>
            </div>
            <AddTodoPopUp 
                data={formData}
                togglePopUp={togglePopUp}
                handleChange={handleChange}
                createTodo={createTodo}
            />
            {todos}
        </div>
    )    
}

export default TodoBoard
