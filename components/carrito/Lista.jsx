import React, { useContext, useState, useEffect} from 'react'
import TiendaContext from '../../context/TiendaContext';
import scss from './Lista.module.scss';
import CarritoProducto from './CarritoProducto'
import Datos from './Datos';


export default function Lista() {
    const { Tienda, setTienda} = useContext(TiendaContext)
    const [Domicilio, setDomicilio] = useState(true)
    const [total, settotal] = useState({
      totalEnvio : 250,
      total: 0
    })


    const obtenertotal = () =>{
      
      const valor = Tienda.reduce((sum, product) => sum + (product.precio * product.cantidad), 0)
      const totales = total.totalEnvio
      if (Domicilio === true) {
        if(valor <= 1000){
          settotal({totalEnvio: 260, total: valor })
        }else{
          settotal({totalEnvio: 360, total: valor})
        }
      } else {
        settotal({totalEnvio: 0, total: valor })
      } 
    }

    const cambiardomicilio = () => {
      setDomicilio(!Domicilio)
    }


    useEffect(() => {
      obtenertotal()
    
    },[Tienda, Domicilio])


    return (
      <div className={scss.carro}>
        <h2>Mi carrito de compras</h2>
        {Tienda.length === 0 ? 'AGREGA PRODUCTOS AL CARRITO' : <>

            {Tienda.map( producto =>(
              <CarritoProducto producto={producto} key={producto.id}/>
            ))}

            <div className={scss.precios}>
            
              <div >

             <h4>Este es el total de tu compra- Selecciona envio a Domicilio o entrega en tienda</h4>
              <h3>{Domicilio === true ? `Costo de envio: $ ${total.totalEnvio} MXN` : `El producto sera entregado en tienda`}</h3>
              <h3>Costo total: $ {total.total + total.totalEnvio} MXN</h3>
              <button onClick={cambiardomicilio}>A Domicilio / Entrega en tienda</button>

            </div>
            <Datos tienda={Tienda} pago={total.total + total.totalEnvio} domicilio={Domicilio} className={scss.precios}/>
            </div>
            
        </>}

        

        
      </div>
    )
}