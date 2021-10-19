import React from 'react'
import scss from './Header.module.scss'
import Titulo from './Titulo'

export default function Encabezado() {
    return (
        <div className={scss.encabezado}>
            <Titulo/>
            
        </div>
    )
}
