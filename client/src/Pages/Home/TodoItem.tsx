import React from "react"
import closeIcon from "../../assets/close-icon.svg"
import checkIcon from "../../assets/check-icon.svg"
import { TodoItemProps } from "../../types/customTypes"


const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {    
    
    const parseTimestamp = (timestamp: string): string => {
        const date = new Date(timestamp)
        const list = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()]
        // add a leading 0
        const [ year, month, day, hour, minutes, ] = list.map(item => {
            return String(item).padStart(2, "0")
        })

        return `${day}/${month}/${year} - ${hour}:${minutes}`
    }
    
    return (
        <div className={todo.status ? "todo-card" : "todo-card disabled"}>
            <div className="card-heading">
                <h2>{todo.title}</h2>
                <span className="timestamp">
                    {todo.createdAt? parseTimestamp(todo.createdAt) : ""}
                </span>
            </div>
            <div className="card-body">
                <div className="card-row">
                    <p className="description">
                        {todo.description}
                    </p>
                </div>
                <div className="card-row">
                    <button className="finish-btn" onClick={() => toggleTodo(todo._id, !todo.status)}>
                        <img src={checkIcon} alt="check icon" />
                    </button>
                    <button className="delete-btn" onClick={() => removeTodo(todo._id)}>
                        <img src={closeIcon} alt="close icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
        