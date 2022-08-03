import React from "react"
import closeIcon from "../../assets/close-icon.svg"
import checkIcon from "../../assets/check-icon.svg"
import { TodoItemProps } from "../../types/customTypes"


const TodoItem: React.FC<TodoItemProps> = ({ todo, finishTodo, deleteTodo }) => {
    return (
        <div className="todo-card">
            <div className="card-heading">
                <h2>{todo.title}</h2>
                <span className="timestamp">{todo.createdAt}</span>
            </div>
            <div className="card-body">
                <div className="card-row">
                    <p className="description">
                        {todo.description}
                    </p>
                </div>
                <div className="card-row">
                    <button className="finish-btn" onClick={() => finishTodo(todo._id)}>
                        <img src={checkIcon} alt="check icon" />
                    </button>
                    <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
                        <img src={closeIcon} alt="close icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
        