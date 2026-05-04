import { FilterProvider } from "../context/FilterContext";
import { ToDoProvider } from "../context/TodoContext";


export function AppProviders({ children }) {
    return (
        <ToDoProvider>
            <FilterProvider>
                {children}
            </FilterProvider>
        </ToDoProvider>
    )
}