import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

import './menu.css'
import Button from '../Button/index';

const Menu = () => { 
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo da Devflix" />
            </Link>
            <Button as={Link} className="buttonLink" to="/cadastro/video">
                Incluir novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;