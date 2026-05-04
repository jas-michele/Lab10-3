import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeButton } from "./Filter/ThemeButton";

export function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        padding: "20px",
        textAlign: "center" as const,
        backgroundColor: theme === "light" ? "#9eb2c8ff" : "#11022eff",
        color: theme === "light" ? "#000" : "#fff"
    }


    const buttonStyles = {
        padding: "15px 30px",
        fontSize: "18px",
        cursor: "pointer",
        marginTop: "10px"
    };

    return (
        <div style={styles}>
            <ThemeButton />
        </div>
    )

}