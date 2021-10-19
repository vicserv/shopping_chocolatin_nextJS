import React from 'react'
import Carrito from './carrito-flotante/Carrito'
import Encabezado from './header/Encabezado'
import Menu from './menu/Menu'

export default function layout({ children }) {
    return (
        <>
        <Encabezado/>
        <Menu/>
        {children}
        <Carrito/>
        </>
    )
}
