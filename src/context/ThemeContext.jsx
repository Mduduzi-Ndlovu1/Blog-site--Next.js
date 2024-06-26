"use client"
import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme")
        
        return value || "light";
    }
    return "light";
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(() => 
         getFromLocalStorage()
    );

    useEffect(()=>{
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    },[theme])

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return <ThemeContext.Provider value={{theme,setTheme,toggle}}>{children}</ThemeContext.Provider>
}