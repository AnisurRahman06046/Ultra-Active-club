import React, { useEffect, useState } from 'react';
import './Activities.css'
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities,setActivities]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div>
            <h2 style={{marginLeft:'50px'}}>Select Today's Exercise</h2>
            <div className='card-container'>
                {
                    activities.map(activity=><Activity
                    key={activity.id}
                    activity={activity}></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;