import React, { useState } from 'react'

const Navbar = () => {


    // hago mi estado para poder cambiar el color de mi navbar
    const [colorFondo, setColorFondo] = useState('')
    // hago mi estado para poder cambiar el color de texto de mi navbar
    // tenga color negro por defeecto
    const [colorTexto, setColorTexto] = useState('#000')



    return (
        <div
            style={{

                // cambio el color de fondo de mi navbar
                background: colorFondo,
                color: colorTexto
            }}>
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
                    onChange={(e) => setColorFondo(e.target.value)}
                />
            </div>
            <br />

            {/* Creo mi boton */}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Seleccione el color de fuente</span>
                </div>
                {/* <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"> */}
                <input
                    type="color"
                    className="form-control"
                    // para ver el color seleccionado
                    // onChange={(e) => console.log(e.target.value)}
                    // le asigno el color de texto
                    onChange={(e) => setColorTexto(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Navbar