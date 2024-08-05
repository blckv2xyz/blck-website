'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

const themes = [
    ['#0f0f0f', '#4cd237'],
    ['#0f0f0f', '#d23737'],
    ['#0f0f0f', '#0099ff'],
    ['#0f0f0f', '#ff9900'],
    ['#0f0f0f', '#ff66ff'],
]

// Pick a random palette
// const themes = palettes[Math.floor(Math.random() * palettes.length)];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const maxThemes = themes.length;
    const [theme, setTheme] = useState(0);

    function switchTheme() {
        // pick a number between 0 and maxThemes
        const random = Math.floor(Math.random() * maxThemes);
        setTheme(random);
    }

    useEffect(() => {
        switchTheme();
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background-color', themes[theme][0]);
        root.style.setProperty('--text-color', themes[theme][1]);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
