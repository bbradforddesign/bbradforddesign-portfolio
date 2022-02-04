import React, { createContext, useContext, useState } from "react";

interface AppThemeContext {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<Partial<AppThemeContext>>({
    darkMode: false,
});

type Props = {
    children: React.ReactNode;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ThemeContext.Provider
            value={{
                darkMode: darkMode,
                toggleDarkMode: () => setDarkMode((darkMode) => !darkMode),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
