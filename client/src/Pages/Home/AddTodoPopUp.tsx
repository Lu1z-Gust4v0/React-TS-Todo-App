import React from "react"
import closeIcon from "../../assets/close-icon.svg"


const AddTodoPopUp = () => {
    return (
        <div className="popup-container">
            <div className="popup-heading">
                <h3>Create a new todo</h3>
                <button>
                    <img src={closeIcon} alt="close icon"/>
                </button>
            </div>
            <div className="popup-body">
                <div className="popup-row">
                    <label htmlFor="add-todo-title">title</label>
                    <input id="add-todo-title" type="text" placeholder="type a title"/>
                </div>
                <div className="popup-row">
                    <label htmlFor="add-todo-description">description</label>
                    <textarea 
                        name="add-todo-description" 
                        id="add-todo-description" 
                        placeholder="type a description"
                        cols={20} 
                        rows={5}
                    >
                    </textarea>
                </div>
                <div className="popup-row">
                    <button>Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodoPopUp