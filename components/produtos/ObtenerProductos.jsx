import React from 'react'
import axios from 'axios';

const URL = 'https://panel.elchocolatin.com/productos'

export default async function ObtenerProductos() {
    return axios.get(URL)
            .then(response=> response.data)
            .then(datos => datos.map( dato => {
                return {
                    id: dato.id,
                    imagen: `https://panel.elchocolatin.com${dato.imagen.formats.small.url || dato.imagen.formats.thumbnail.url}`,
                    precio: dato.preciomxn,
                    identificador: dato.identificador,
                    nombre: dato.nombre,
                    cantidad: 1,
                }
            }))

            

    
}


