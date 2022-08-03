import React from "react"
import AddTodoPopUp from "./AddTodoPopUp"
import TodoItem from "./TodoItem"
import createIcon from "../../assets/create-icon.svg"


const TodoBoard = () => {
    return (
        <div className="todo-board">
            <div className="todo-board-row">
                <button className="create-btn">
                    <img src={createIcon} alt="create icon" />
                </button>
            </div>
            <TodoItem/>
        </div>
    )    
}

export default TodoBoard
