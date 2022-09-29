import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const {time,name,img}=props.activity
    return (
       <div>
            
             <div className='card-info'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Time required :{time} s </h4>
            <button>
                <p>Add to list</p>
            </button>
        </div>
       </div>
        
    );
};

export default Activities;