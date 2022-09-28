import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Body.css'

const Body = () => {
    return (
        <div className='body-container'>
            <div className='items-container'>
                <Header></Header>
                <Activities></Activities>
                {/* <h1>this is activity part</h1> */}
            </div>

            <div className='cartlist-container'>
                
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Body;