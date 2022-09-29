import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';
import Activities from '../Activities/Activities';
import List from '../List/List';
import './Container.css'

const Container = () => {
    const [activities,setActivities]=useState([]);
    const [items,setItems]=useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);
    useEffect(()=>{
        const storedList = getStoredCart();
        const savedList = [];
        for (const id in storedList){
            const addedItems = activities.find(activity=>activity.id===id)
            // console.log(addedItems)
            if (addedItems){
                const quantity = storedList[id];
                addedItems.quantity = quantity;
                savedList.push(addedItems)
            }
            
        }
        setItems(savedList)
    },[activities])
    const addToList =(activity)=>{
        // console.log(activity)
        const newItem =[...items,activity];
        setItems(newItem)
        addToDb(activity.id)
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
                
                <List items={items}></List>
             </div>
        </div>
    );
};

export default Container;