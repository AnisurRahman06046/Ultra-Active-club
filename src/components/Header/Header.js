import React from 'react';
import './Header.css'
import logo from '../../Logo/Logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h3>Power Zone</h3>
        </div>
    );
};

export default Header;