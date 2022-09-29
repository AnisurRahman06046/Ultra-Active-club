import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import './Container.css'

const Container = () => {
    const [activities,setActivities]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);

    const addToList =(activity)=>{
        console.log(activity)
    }

    return (
        <div className='container'>
            
             <div className='workouts'>
                <h1 style={{marginLeft:'100px'}}>items container</h1>
             <div className='card'>
                 {
                    activities.map(activity=><Activities
                    activity={activity}
                    key={activity.id}
                    addToList={addToList}></Activities>)
                }
                
             </div>
             </div>
             <div className='list'>
                <h1>this is list container</h1>
                <List></List>
             </div>
        </div>
    );
};

export default Container;