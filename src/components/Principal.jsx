import React, { useContext } from 'react'

// importo mi themeContext
import { ThemeContext } from '../context/ThemeProvider'


const Principal = () => {

    // para poder usar el context
    // useContext(ThemeContext) ---> le paso el context
    const { theme } = useContext(ThemeContext)


    return (
        <div
            // le paso el estilo
            style={
                {

                    // cambio el color de fondo de mi navbar
                    background: theme.background,
                    // cambio el color de texto de mi navbar
                    color: theme.color
                }
            }
        >
            <h1>Contenido de mi sitio web</h1>
        </div >
    )
}

export default Principal