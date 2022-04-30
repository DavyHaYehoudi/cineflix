import React, { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><NavLink to='/' className={navData => navData.isActive ? 'nav-active' : ''} >Accueil</NavLink></li>
                    <li><NavLink className={navData => navData.isActive ? 'nav-active' : ''} to='/coup-de-coeur' >Coup de coeur</NavLink></li>
                </ul>
            </nav>
            <h1>CINEFLIX</h1>
        </div>

    );
};

export default Header;