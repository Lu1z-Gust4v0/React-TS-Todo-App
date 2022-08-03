import React, { useState } from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"
import { CreateTodoFormData, TodoBoardProps } from "../../types/customTypes"
import useFormChange from "../../Hooks/useFormChange"


const TodoBoard: React.FC<TodoBoardProps> = ({ userId, active, togglePopUp }) => {    
    const [formData, handleChange] = useFormChange<CreateTodoFormData>({
        "title": "",
        "description": ""
    })
    
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
