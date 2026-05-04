import { createContext } from "react"

type Theme "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

function ThemeContext = createContext<ThemeContextType>({
 theme: "light",
 toggleTheme: () => {}
}
   

)