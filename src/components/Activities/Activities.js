import React, { useEffect, useState } from 'react';
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
            <h2>Select Today's Exercise</h2>
            {
                activities.map(activity=><Activity
                key={activity.id}></Activity>)
            }
        </div>
    );
};

export default Activities;