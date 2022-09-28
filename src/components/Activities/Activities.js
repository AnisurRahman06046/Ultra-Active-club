import React, { useEffect, useState } from 'react';

const Activities = () => {
    const [activities,setActivities]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>Select Today's Exercise</h2>
        </div>
    );
};

export default Activities;