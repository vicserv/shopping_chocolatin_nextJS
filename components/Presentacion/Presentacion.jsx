import React from 'react'
import scss from './Presentacion.module.scss'

export default function Encabezado() {
    return (
        <div className={scss.presentacion}>
            <div className={scss.presentacion__titulo}>Bienvenido a la tienda Online de "El Chocolatin"</div>
            <img src="/chocolatin.jpg" />
            <div className={scss.presentacion__visitanos}> Visitanos en nuestra tienda fisica. Tenemos todo tipo de dulces en bolsa y a granel. atención especial a empresas y escuelas.</div>
        </div>
    )
}