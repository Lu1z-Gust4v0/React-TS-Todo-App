import React from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"
import { TodoBoardProps } from "../../types/customTypes"


const TodoBoard: React.FC<TodoBoardProps> = ({ active, togglePopUp }) => {    
    return (
        <div className={active ? "todo-board active": "todo-board"}>
            <div className="todo-board-row">
                <h2>My todos</h2>
                <button className="create-btn" onClick={togglePopUp}>
                    <img src={createIcon} alt="create icon" />
                </button>
            </div>
            <AddTodoPopUp />
        </div>
    )    
}

export default TodoBoard
