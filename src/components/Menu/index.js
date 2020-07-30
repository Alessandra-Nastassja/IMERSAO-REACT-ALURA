import React from 'react';

import Logo from '../../assets/img/logo.png';

import './menu.css'
import Button from '../Button/index';

const Menu = () => {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="Logo da Devflix" />
            </a>
            <Button as="a" className="buttonLink" href="/">
                Incluir novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;