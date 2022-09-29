import React from 'react';
import Logo from '../../Logo/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h2>Power Zone</h2>
        </div>
    );
};

export default Header;