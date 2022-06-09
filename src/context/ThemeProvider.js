// rafce
import React, { useEffect, useState } from 'react'

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


    // para que cada vez que se abra de nuevo el navegador se necesita que traiga los cambios de mi theme
    // para ello leemos el 'themeLocal' de mi localStorage para setear el tema como habia quedado
    useEffect(() => {

        // le decimos que si existe 'themeLocal'
        if (localStorage.getItem('themeLocal')) {

            // nosotros sacamos en una constante el thema local
            // JSON.parse() ---> creamos el objeto
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))

            // guardamos el thema en setTheme, para que
            setTheme(themeLocal)
        }


        // para que se solo se ejecute una sola vez
    }, [])





    // creo una funcion que me cambie los valores del color
    const cambioColor = (valor) => {
        // cambiamos el valor
        setTheme(valor)

        // localStorage.setItem() --> ya podemos guardar el valor en el localStorage
        // 'themeLocal' ---> mi key en el localStorage
        // JSON.stringify() ---> le pasamos objeto
        localStorage.setItem('themeLocal', JSON.stringify(valor))
    }




    return (

        // DEBEMOS USAR NUESTRA VARIABLE ThemeContext ---> y pasarle la propiedad que es un provider
        <ThemeContext.Provider
            // le paso este valor al provider para poder usarlo en otro lado
            value={{
                // le paso el estado que contiene mi tema
                theme,
                cambioColor
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