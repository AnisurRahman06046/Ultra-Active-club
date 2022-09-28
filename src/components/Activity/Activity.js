import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img,name,time}=props.activity;
    console.log(props.activity)
    return (
        <div className='activity-container'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h3>{name}</h3>
                <h4>Time Required :{time}s </h4>
            </div>
            <button className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activity;