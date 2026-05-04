import { ToDoProvider } from "../context/TodoContext";

export function AppProviders({ children}) {
    return (
        <ToDoProvider>
            {children}
        </ToDoProvider>
    )
}