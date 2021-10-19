import React, { useContext } from 'react'
import TiendaContext from '../../context/TiendaContext';
import scss from './Lista.module.scss';

export default function CarritoProducto({producto}) {
  const { Tienda, setTienda} = useContext(TiendaContext)

  function eliminar(id){
    const elemento = Tienda.filter(elemento => elemento.id !== id)
    setTienda(elemento)
  }
  function aumentar(id){
    const index = Tienda.findIndex((pro => pro.id === id))
    const nuevo = [...Tienda]
  
    nuevo[index].cantidad ++
    setTienda(nuevo)
  }

  function disminuir(id){
    const index = Tienda.findIndex((pro => pro.id === id))
    const nuevo = [...Tienda]
    if(producto.cantidad > 1){
      
      nuevo[index].cantidad --
      setTienda(nuevo)
    }
  }

    return (
        <div className={scss.lista}>
          <div className={scss.lista__imagen} style={{backgroundImage: `url(${producto.imagen})`}}></div>
          
          <div className={scss.lista__boton} onClick={() =>disminuir(producto.id)}>-</div>
          <div className={scss.lista__producto}>PCS: {producto.cantidad}</div>
          <div className={scss.lista__boton} onClick={() =>aumentar(producto.id)}>+</div>

          <div className={scss.lista__precio}>PRECIO: ${producto.precio} MXN</div>
      
          <div className={scss.lista__producto}>{producto.nombre}</div>
          <div className={scss.lista__productos} onClick={() =>eliminar(producto.id)} >Eliminar</div>
          <div className={scss.lista__producto}>TOTAL: ${producto.cantidad * producto.precio} MXN</div>
          
        </div>
    )
}
