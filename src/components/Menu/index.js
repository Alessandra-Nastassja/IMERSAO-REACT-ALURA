import React from 'react';

import Logo from '../../assets/img/logo.png';

import './menu.css'
import ButtonLink from '../ButtonLink';

const Menu = () => {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="Logo da Devflix" />
            </a>
            <ButtonLink className="buttonLink" href="/">
                Incluir novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;