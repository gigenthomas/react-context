import React from 'react';
import { useTheme , useThemeUpdate } from './ThemeContext';


export default function FunctionalComponent(){

    const toggleTheme = useThemeUpdate();
    const darkTheme = useTheme()
    console.log(darkTheme);

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        toggleTheme()
    }

    const themeStyles = {
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color : darkTheme ? '#333' : '#CCC',
        padding: '2rem',
        marging : '2rem'


    }

    return (

        <>
            <div style={themeStyles}>Functional Component</div>
            <button onClick={buttonHandler}> Toggle Theme</button>
        </>
    )
}