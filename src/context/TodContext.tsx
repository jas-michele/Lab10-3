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
}