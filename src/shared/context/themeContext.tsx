import React, { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme ,DarkTheme } from "../themes";
import { Box, ThemeProvider } from "@mui/material";

interface IThemeContextData {
    themeName: 'Light' | 'Dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');

    const theme = useMemo(() => {
        if(themeName === 'Light') return LightTheme;

        return DarkTheme;
    },[themeName])

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeUsed => oldThemeUsed === 'Light' ? 'Dark' : 'Light')
    },[])


    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}> 
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}