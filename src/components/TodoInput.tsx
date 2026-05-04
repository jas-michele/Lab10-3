import { useContext, useState } from "react";
import { ToDoContext } from "../context/TodoContext";

export function TodoInput() {
    const { addToDo } = useContext(ToDoContext);

    const [text, setText] = useState("");

    const handleAdd = () => {
        if (!text.trim()) return;

        addToDo(text);
        setText("");
    }
    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a todo..."
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    )

}