import React from 'react';
import './Activities.css'

const Activities = (props) => {
    
    // console.log(props)
    const {time,name,img}=props.activity;
    const {addToList}=props;
    return (
       <div>
            
             <div className='card-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Time required :{time} s </h4>
                <button onClick={()=>addToList(time)} >
                <p>Add to list</p>
            </button>
            
            </div>
            
       </div>
        
    );
};

export default Activities;