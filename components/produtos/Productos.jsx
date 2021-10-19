import React, { useEffect, useState } from 'react'
import scss from './Productos.module.scss';
import ObtenerProductos from './ObtenerProductos';
import Producto from './Producto';

export default function Productos() {
    const [Productos, setProductos] = useState([])

    useEffect(() => {
        ObtenerProductos().then(pro=> setProductos(pro))

    }, [])

    return (
        <div className={scss.productos}>
            
            { Productos.map(producto => (
                
                <div className="tarjeta" key={producto.id}>
                
                <Producto producto={producto}/>
                </div> 
            
            ))}

        </div>
    )
}
