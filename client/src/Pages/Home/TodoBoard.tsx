import React, { useState } from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"
import { CreateTodoFormData, TodoBoardProps } from "../../types/customTypes"


const TodoBoard: React.FC<TodoBoardProps> = ({ active, togglePopUp }) => {    
 
    const [formData, setFormData] = useState({
        "title": "",
        "description": ""
    })
 
    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement
        
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [target.className]: target.value
            }
        })
    }

    const createTodo = async (data: CreateTodoFormData) => {}

    const popUpProps = {
        data: formData,
        togglePopUp: togglePopUp,
        handleChange: handleChange,
        createTodo: createTodo
    }

    return (
        <div className={active ? "todo-board active": "todo-board"}>
            <div className="todo-board-row">
                <h2>My todos</h2>
                <button className="create-btn" onClick={togglePopUp}>
                    <img src={createIcon} alt="create icon" />
                </button>
            </div>
            <AddTodoPopUp {...popUpProps}/>
        </div>
    )    
}

export default TodoBoard
