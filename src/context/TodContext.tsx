import { createContext } from "react";

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