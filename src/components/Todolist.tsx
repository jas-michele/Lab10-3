import { useContext } from "react";
import { ToDoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import { TodoItem } from "./TodoItem"

export function TodoList() {
    const { todos, clearCompleted } = useContext(ToDoContext);
    const { filter } = useContext(FilterContext);

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    })
     
    console.log(todos);
    return (
        <div>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}

            <button onClick={clearCompleted}>
                Clear Completed
            </button>
        </div>
    )


}