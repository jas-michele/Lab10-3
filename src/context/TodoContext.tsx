import { createContext, useState } from "react";

type ToDo = {  
    id: string | number;
    text: string;
    completed: boolean;
}

type ToDoContextType = {
    todos: ToDo[];
    addToDo: (text: string) => void;
    toggleToDo: (id: string | number) => void;
    deleteToDo: (id: string | number) => void;
    editToDo: (id: string | number, newText: string) => void;

    clearCompleted: () => void;

}

export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addToDo: () => {},
    toggleToDo: () => {},
    deleteToDo: () => {},
    editToDo: () => {},
    clearCompleted: () => {}
});

type Props = {
    children: React.ReactNode;
}

export function ToDoProvider({ children }: Props) {
    
    const [todos, setTodos] = useState<ToDo[]>([]);

    const addToDo = (text: string) => {
        const newTodo: ToDo = {
            id: Date.now(),
            text,
            completed: false
        }; 
        setTodos(prev => [...prev, newTodo]);
    };

    const toggleToDo = (id: string | number) => {
        setTodos(prev =>
            prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)
        )
    }

    const deleteToDo = (id: string | number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const editToDo = (id: string | number, newText: string) => {
        setTodos(prev => 
            prev.map(todo => todo.id === id ? {...todo, text: newText}
                : todo
            )
        )
    }

    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed))
    };

    return (
        <ToDoContext.Provider
            value={{
                todos,
                addToDo,
                toggleToDo,
                deleteToDo,
                editToDo,
                clearCompleted
            }}
            >
                {children}
            </ToDoContext.Provider>
    )

}