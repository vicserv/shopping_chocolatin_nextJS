import React from 'react'
import scss from './Menu.module.scss'
import Link from 'next/link';

export default function Menu() {
    return (
        <div className={scss.menu}>
            <Link href="/">El Chocolatin</Link>
            <Link href="/carrito">Mi Carrito</Link>
            <Link href="/">Mi Pedido</Link>
        </div>
    )
}
