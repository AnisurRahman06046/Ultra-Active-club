import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
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
                this is add to list part
            </div>
        </div>
    );
};

export default Body;