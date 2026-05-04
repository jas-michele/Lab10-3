import { useContext } from "react";
import { ToDoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem"

export function TodoList() {
    const { todos } = useContext(ToDoContext);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )


}