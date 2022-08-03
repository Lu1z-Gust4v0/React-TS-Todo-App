import React from "react"
import closeIcon from "../../assets/close-icon.svg"
import checkIcon from "../../assets/check-icon.svg"


const TodoItem = () => {
    return (
        <div className="todo-card">
            <div className="card-heading">
                <h2>Todo item with a super super long name</h2>
                <span className="timestamp">Aug 02 2022 23:37</span>
            </div>
            <div className="card-body">
                <div className="card-row">
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt minima minus adipisci omnis, commodi aperiam ut quod voluptate ea earum vero eaque nemo ipsum repellendus? Reprehenderi
                    </p>
                </div>
                <div className="card-row">
                    <button className="finish-btn">
                        <img src={checkIcon} alt="check icon" />
                    </button>
                    <button className="delete-btn">
                        <img src={closeIcon} alt="close icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
        