import React, {useContext, useState} from 'react'
import scss from './Lista.module.scss'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'


const stripePromise = loadStripe("pk_test_51IQM8KDwdATUt06EVfL4MZKYq4sX1mHQuqCXXvwP5t7tZksKnAbLeqgUHJx32NWTdZbMybhBPjsvUjxmDz8ZxpMU004prQkpoA")


const CheckoutForm = ({datos, tienda, pago, domicilio}) =>{

  const stripe = useStripe();
  const elements = useElements();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        "address": {
          "city": datos.ciudad,
          "country": null,
          "line1": datos.direccion,
          "line2": datos.numero,
          "postal_code": datos.cp,
          "state": datos.estado
        },
        "email": datos.email,
        "name": datos.nombre,
        "phone": datos.telefono
      }
    })
    if(!error){
      const { id } = paymentMethod;

      const {data} = await axios.post('https://api.elchocolatin.com/', {
        id,
        amount: pago*100,
        description: `${domicilio === true ? '*ENTREGA A DOMICILIO*' : '*ENTREGA EN TIENDA*'} ||, ${tienda.map(producto => (
          `${producto.cantidad} * ${producto.nombre}, SUBTOTAL: ${producto.cantidad * producto.precio} ||  `
        ))}`,

      })
      alert('pago realizado con exito, enviamos tu factura a tu correo')
    }
  }
  
  return <form onSubmit={handleSubmit} >
    
    <CardElement  options={{
    style: {
      
      base: {
       
        
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',

          
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }} />
    <button>
      Comprar
    </button>
  </form>
} 


export default function Datos({tienda, pago, domicilio}) {

  

    const [datos, setdatos] = useState({
        nombre: '',
        direccion: '',
        numero: '',
        ciudad: '',
        estado: '',
        cp: '',
        telefono: '',
        email: ''
      })

      
     

      const cambiar = (e) =>{
        setdatos({
          ...datos,
          [e.target.name]: e.target.value
        })
        
      }

    return (
        <div className={scss.datosenvio}>
        
        <h3 className={scss.datosenvio__titulo}>Informacion de Envio</h3>
        <div>
          <label >Nombre</label>
          <input type="text" onChange={cambiar} name="nombre"/>
        </div>
        <div>
          <label >Direccion</label>
          <input type="text" onChange={cambiar} name="direccion"/>
        </div>
        <div>
          <label >Numero</label>
          <input type="number" onChange={cambiar} name="numero"/>
        </div>
        <div>
          <label >Ciudad</label>
          <input type="text" onChange={cambiar} name="ciudad"/>
        </div>
        <div>
          <label >Estado</label>
          <input type="text" onChange={cambiar} name="estado"/>
        </div>
        <div>
          <label >Codigo Postal (CP)</label>
          <input type="number" onChange={cambiar} name="cp"/>
        </div>
        <div>
          <label >Telefono</label>
          <input type="number" onChange={cambiar} name="telefono"/>
        </div>
        <div>
          <label >Correo Electronico</label>
          <input type="email" onChange={cambiar} name="email"/>
        </div>
        <h3 className={scss.datosenvio__titulo}>Informacion de Pago</h3>
        
        <label>Tarjeta de Debito/ Credito</label> 
        <div>Ingrese Numero de Tarjeta, Mes y Año, CVC, y Codigo Postal</div>
        <div className={scss.tarjeta}>
          
        <Elements stripe={stripePromise} >
          <CheckoutForm datos={datos} tienda={tienda} pago={pago} domicilio={domicilio} />
        </Elements>
        </div>
        
        
        </div>
    )
}
