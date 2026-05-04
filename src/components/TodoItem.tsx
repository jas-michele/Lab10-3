import {  useContext } from "react";
import { ToDoContext } from "../context/TodoContext";

type Props = {
    todo: {
        id: string | number;
        text: string;
        completed: boolean;
    }
}

export function TodoItem({ todo }: Props){
    const { toggleToDo, deleteToDo, editToDo} = useContext(ToDoContext);

    const handleEdit = () => {
        const newText = prompt("Edit todo:", todo.text)

        if (newText) {
            editToDo(todo.id, newText)
        }
    }

    return (
        <div className="todo-item">
            <span
                onClick={() => toggleToDo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
                >
                    {todo.text}
                </span>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => deleteToDo(todo.id)}>
                    Delete
                </button>
        </div>
    )
}