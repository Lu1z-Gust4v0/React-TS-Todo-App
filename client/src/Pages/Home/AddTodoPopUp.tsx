import React from "react"
import closeIcon from "../../assets/close-icon.svg"
import { PopUpProps } from "../../types/customTypes"


const AddTodoPopUp: React.FC<PopUpProps> = ({ data, togglePopUp, handleChange, createTodo }) => {
    return (
        <div className="popup-container">
            <div className="popup-heading">
                <h3>Create a new todo</h3>
                <button onClick={togglePopUp}>
                    <img src={closeIcon} alt="close icon"/>
                </button>
            </div>
            <div className="popup-body">
                <div className="popup-row">
                    <label htmlFor="add-todo-title">title</label>
                    <input 
                        className="title"
                        id="add-todo-title" 
                        type="text" 
                        placeholder="type a title"
                        onChange={handleChange}
                        value={data.title}
                        required
                    />
                </div>
                <div className="popup-row">
                    <label htmlFor="add-todo-description">description</label>
                    <textarea 
                        className="description"
                        name="add-todo-description" 
                        id="add-todo-description" 
                        placeholder="type a description"
                        cols={20} 
                        rows={5}
                        onChange={handleChange}
                        value={data.description}
                        required
                    >
                    </textarea>
                </div>
                <div className="popup-row">
                    <button onClick={() => createTodo()}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodoPopUp