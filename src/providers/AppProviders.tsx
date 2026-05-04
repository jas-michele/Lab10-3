import { ToDoProvider } from "../context/TodoContext";

export function AppProviders({ children }) {
    return (
        <ToDoProvider>
            <AppProviders>
                {children}
            </AppProviders>
        </ToDoProvider>
    )
}