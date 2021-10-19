import React, { useContext } from 'react'
import TiendaContext from '../../context/TiendaContext';
import Link from 'next/link';
import scss from'./Carrito.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas);

export default function Carrito() {
    const { Tienda, setTienda} = useContext(TiendaContext)
    return (
        <Link href="/carrito">
        <div className={scss.carrito}>
            <div className={scss.numero}>{Tienda.length}</div>
            <FontAwesomeIcon icon={["fas", "shopping-cart"]}/>
        </div>
        
        </Link>
    )
}
