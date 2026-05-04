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
    const { toggleToDo, deleteToDo } = useContext(ToDoContext);

    return (
        <div>
            <span
                onClick={() => toggleToDo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
                >
                    {todo.text}
                </span>

                <button onClick={() => deleteToDo(todo.id)}>
                    Delete
                </button>
        </div>
    )
}