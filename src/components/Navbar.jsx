import React, { useContext, useState } from 'react'


// importo mi themeContext
import { ThemeContext } from '../context/ThemeProvider'




const Navbar = () => {


    // llamo los valores de mi contexto
    const { theme, cambioColor } = useContext(ThemeContext)

    return (
        <div
            style={
                {

                    // cambio el color de fondo de mi navbar
                    background: theme.background,
                    // cambio el color de texto de mi navbar
                    color: theme.color
                }
            }>


            <h1>Navbar</h1>
            <br />
            {/* Creo mi boton */}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Seleccione el color de fondo</span>
                </div>
                {/* <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"> */}
                <input
                    type="color"
                    className="form-control"
                    // para ver el color seleccionado
                    // onChange={(e) => console.log(e.target.value)}
                    // le asigno el color de fondo
                    onChange={(e) => cambioColor(
                        // vamos a tomar lo que viene de mi context
                        {
                            // haga una copia del state original que trae color y background de mi context
                            ...theme,
                            // le pongo mi color de fondo
                            background: e.target.value
                        }
                    )}
                />
            </div>
            <br />

            {/* Creo mi boton */}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Seleccione el color de texto</span>
                </div>
                {/* <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"> */}
                <input
                    type="color"
                    className="form-control"
                    // para ver el color seleccionado
                    // onChange={(e) => console.log(e.target.value)}
                    // le asigno el color de texto
                    onChange={(e) => cambioColor(
                        // vamos a tomar lo que viene de mi context
                        {
                            // haga una copia del state original que trae color y background de mi context
                            ...theme,
                            // le pongo mi color de texto
                            color: e.target.value
                        }
                    )}
                />
            </div>
        </div>
    )
}

export default Navbar