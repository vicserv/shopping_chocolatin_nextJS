import React from 'react'
import scss from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas);


const Estrellas = () =>{

    return(
        <div className={scss.estrellas}>
        <span><FontAwesomeIcon icon={["fas", "star"]}/></span>
        <span><FontAwesomeIcon icon={["fas", "star"]}/></span>
        <span><FontAwesomeIcon icon={["fas", "star"]}/></span>
        <span><FontAwesomeIcon icon={["fas", "star"]}/></span>
        <span><FontAwesomeIcon icon={["fas", "star"]}/></span>
        </div>
    )
}

export default function Titulo() {
    return (
        <>
            <div className={scss.Titulo}>El Chocolatin</div>
            <Estrellas  className={scss.estrellas}/>
        </>
    )
}
