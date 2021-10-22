import React from 'react'
import axios from 'axios';

const URL = 'http://194.163.138.149:1338/productos'

export default async function ObtenerProductos() {
    return axios.get(URL)
            .then(response=> response.data)
            .then(datos => datos.map( dato => {
                return {
                    id: dato.id,
                    imagen: `http://194.163.138.149:1338${dato.imagen.formats.small.url || dato.imagen.formats.thumbnail.url}`,
                    precio: dato.preciomxn,
                    identificador: dato.identificador,
                    nombre: dato.nombre,
                    cantidad: 1,
                }
            }))

            

    
}


