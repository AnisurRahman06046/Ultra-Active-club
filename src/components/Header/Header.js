import React from 'react';
import Logo from '../../Logo/Logo.png'

const Header = () => {
    return (
        <div className='d-flex align-items-center'>
            <img  style={{height:'100px',width:'100px'}} src={Logo} alt="" />
            <h2>Power Zone</h2>
        </div>
    );
};

export default Header;