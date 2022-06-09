// rafce
import React, { useState } from 'react'

// context utiliza una constante 
// para poder crear el contexto
// ademas podemos exportarlo para apoderlo usar en otro archivo
// se hace por cada uno de los context o PROVIDERS
// por aqui viajan nuestros datos
export const ThemeContext = React.createContext()



// pasamos los props
const ThemeProvider = (props) => {

    // creo mi estado de mi data inicial
    const themes = {
        // color para el texto
        color: '#000',
        // color de fondo
        background: '#eee'
    }

    // creo este estado para hacer mi tema
    const [theme, setTheme] = useState(themes)

    return (

        // DEBEMOS USAR NUESTRA VARIABLE ThemeContext ---> y pasarle la propiedad que es un provider
        <ThemeContext.Provider
            // le paso este valor al provider para poder usarlo en otro lado
            value={{
                // le paso el estado que contiene mi tema
                theme,
                setTheme
            }}
        >
            {/* pasamos los children ---> porque vamos a 
            usarlo en nuestro app.jsx y
            lo vamos a utilizar en algun componente
            que nosotros deseamos sacamos esas propiedades
            */}
            {/* TOMA TODOS NUESTROS COMPONENTES HIJOS */}
            {props.children}
        </ThemeContext.Provider>

    )
}

export default ThemeProvider