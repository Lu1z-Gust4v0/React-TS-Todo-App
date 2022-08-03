import React, { useState, useEffect, useCallback } from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"
import { ApiDataType, CreateTodoFormData, ITodo, TodoBoardProps } from "../../types/customTypes"
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
            const data = await getTodos(userId) 
            
            setTodoList(data.todos)
        }

        fetchTodos(userId).catch(console.log)
    }, [])

    
    const createTodo = async () => {
        try {
            const response = await addTodo({
                ...formData,
                userId: userId
            })

            window.alert(response.message)

        } catch (err: any) {
            throw new Error(err.message || "Unknown error")
        }
    }

    const removeTodo = async (id: string) => {
        try {
            const response = await deleteTodo(id)

            window.alert(response.message)
        } catch (err: any) {
            throw new Error(err.message || "Unknown error")
        }
    }

    const finishTodo = async (id: string, status: boolean) => {
        try {
            const response = await updateTodo(id, status)

            window.alert(response.message)
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
                finishTodo={finishTodo}
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
