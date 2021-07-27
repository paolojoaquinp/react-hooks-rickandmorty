import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext(null);

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if(theme) {
            //header
            //body
            document.body.style.setProperty("--background-primary", "black");
            document.body.style.setProperty("--color-font", "rgb(221, 225, 233)");
        } else {
            //header

            //body
            document.body.style.setProperty(
                "--background-primary",
                "white"
            );
            document.body.style.setProperty("--color-font", "rgb(2, 8, 20)");
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;