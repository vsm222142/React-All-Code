import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


function ContextDemo({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((t) => (t === "light" ? "dark" : "light"))
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>

        </>
    )
}


function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <>
            <body onClick={toggleTheme} style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black" }}>
                Color Theme: {theme}
            </body>
        </>
    )

}

export { ContextDemo, ThemeButton };
