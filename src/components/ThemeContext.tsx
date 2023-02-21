import React , { useContext, useState} from 'react';

const ThemeContext = React.createContext(false);
const ThemeUpdateContect = React. createContext<any>({} as any)

// Custom Hook 
export function useTheme(){
    return useContext(ThemeContext)
}

// Custom Hook 
export function useThemeUpdate(){
    return useContext(ThemeUpdateContect);
}

export default function ThemeProvider({ children }: { children: React.ReactElement }) {

const [darkTheme , setTheme ] = useState(false); 


    function toggleTheme(){
        setTheme( prevTheme => !prevTheme)
    }

 return(

    <ThemeContext.Provider value = {darkTheme}>
        <ThemeUpdateContect.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContect.Provider>
    </ThemeContext.Provider>
 )
}
