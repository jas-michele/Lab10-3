import { FilterProvider } from "../context/FilterContext";
import { ToDoProvider } from "../context/TodoContext";
import { ThemeProvider } from "../context/ThemeContext";


export function AppProviders({ children }) {
    return (
        <ThemeProvider>
        <ToDoProvider>
            <FilterProvider>
                {children}
            </FilterProvider>
        </ToDoProvider>
        </ThemeProvider>
    )
}