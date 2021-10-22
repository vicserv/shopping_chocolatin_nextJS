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
        <div className={scss.grid}>
            <div className={scss.space}>
                <div className={scss.Titulo}>EL CHOCOLATIN</div>
                <Estrellas  className={scss.estrellas}/>
            </div>
            
            <img src="/chocolatin-2.png" className={scss.imagen} />
            </div>
    )
}
