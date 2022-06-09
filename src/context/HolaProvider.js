import React from 'react'

// context utiliza una constante 
// para poder crear el contexto
// ademas podemos exportarlo para apoderlo usar en otro archivo
// se hace por cada uno de los context o PROVIDERS
// por aqui viajan nuestros datos
export const HolaContext = React.createContext()



// pasamos los props
const HolaProvider = (props) => {

    // me creo una constante que se llame hola
    const hola = 'Hola desde GLOBAL...'


    return (


        // DEBEMOS USAR NUESTRA VARIABLE HolaContext ---> y pasarle la propiedad que es un provider
        < HolaContext.Provider
            // le paso este valor al provider para poder usarlo en otro lado
            value={{
                // le paso la constante creada
                hola
            }}
        >
            {/* pasamos los children ---> porque vamos a 
                    usarlo en nuestro app.jsx y
                    lo vamos a utilizar en algun componente
                    que nosotros deseamos sacamos esas propiedades
                    */}
            {/* TOMA TODOS NUESTROS COMPONENTES HIJOS */}
            {props.children}
        </HolaContext.Provider >
    )
}

export default HolaProvider

