import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <NavLink to="/">
                <img src='https://i.ibb.co/tw0nZC6/Untitled-design-10.png' alt='logo'></img>
            </NavLink>
            <Nav></Nav>
        </div>
    );
};

export default Header;