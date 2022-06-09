import React, { useContext } from 'react'

// importo mi themeContext
import { ThemeContext } from '../context/ThemeProvider'
// importo mi HolaContext
import { HolaContext } from '../context/HolaProvider'





const Principal = () => {

    // para poder usar el context
    // useContext(ThemeContext) ---> le paso el context
    const { theme } = useContext(ThemeContext)

    // para poder usar el context
    // useContext(ThemeContext) ---> le paso el context
    const { hola } = useContext(HolaContext)


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
            <p>{hola}</p>
        </div >
    )
}

export default Principal