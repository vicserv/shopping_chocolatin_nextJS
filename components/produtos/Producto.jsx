import React, {useState, useContext} from 'react'
import TiendaContext from '../../context/TiendaContext';
import scss from './Productos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas);


export default function Producto({producto}) {
    const {Tienda, setTienda} = useContext(TiendaContext)

    const [Cantidad, setCantidad] = useState(producto.cantidad)

    const agregar = ()=>{
        const incluido = Tienda.find((prod => prod.id === producto.id))
        if( incluido ){
            alert('El producto ya fue agregado, modificalo en el carrito')
        }else{
            setTienda((prevTienda) => prevTienda.concat({...producto, cantidad: Cantidad}))
            
        }
    }

    const disminuir = () =>{
        if(Cantidad > 1){
            setCantidad(Cantidad - 1)
        }
    }

    const aumentar = () =>{
        setCantidad(Cantidad + 1)
    }

    return (
        <div className={scss.producto}>
            <div className={scss.producto__imagen} style={{backgroundImage: `url(${producto.imagen})`}}></div>
            <div className={scss.producto__precio}>TOTAL: ${producto.precio} MXN</div>
            <div className={scss.producto__titulo}>{producto.nombre}</div>

            <div className={scss.producto__carrito}>
                <div className={scss.menos} onClick={() =>disminuir()}><FontAwesomeIcon icon={["fas", "minus"]}/></div>
                <div className={scss.cantidad}>Cantidad: {Cantidad}</div>
                <div className={scss.mas} onClick={() =>aumentar()}><FontAwesomeIcon icon={["fas", "plus"]}/></div>
            </div>
            
            <div className={scss.producto__agregar} onClick={agregar}>
                Agregar <span><FontAwesomeIcon icon={["fas", "shopping-cart"]}/></span> 
            </div>

        </div> 

            
    )
}
