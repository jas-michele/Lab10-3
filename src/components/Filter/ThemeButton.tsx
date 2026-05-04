import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ThemeButton() {
    const { theme, toggleTheme} = useContext(ThemeContext);

    console.log("theme", theme)
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}