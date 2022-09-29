import React, { useEffect, useState } from 'react';
import './List.css'
import propic from '../../images/myimg.jpg'
import { addNreakTimeToDb ,getStoredBreakTime} from '../../Utilities/fakedb';
import { toast } from 'react-toastify';
// import Swal from 'sweetalert2' 

const List = ({items}) => {
    const notify = () => toast("Congratulations! You have completed the activities");
   const [times,setTimes]=useState(0);
   
   useEffect(()=>{
    const saved = getStoredBreakTime();
    setTimes(saved)
   },[])
   const handleBreakTime = (c)=>{
      setTimes(c)
    //   addToDb(c)
    addNreakTimeToDb(c)
    
   }
    
    let duration = 0;
    for (const item of items){
        duration=duration+item.time
    }

    // it was used before instead of actual toast
    // const toastHandler = ()=>{
    //     // Swal.fire(
    //     //     'Congratulations!',
    //     //     'You completed the activities!',
    //     //     'success'
    //     //   ) 
    // }
    
    return (
        <div className='list-container'>
            <div className='profile-container'>
                <img src={propic} alt="" />
                <h3>Amir khan</h3>
            </div>
            <div className='profile-info'>
                <div className='weight'>
                    <h4>65 <small>Kg</small></h4>
                    <p>Weight</p>
                </div>
                <div className='height'>
                    <h4>6.8</h4>
                    <p>Height</p>
                </div>
                <div className='age'>
                    <h4>25 <small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>


            <div className='break-time'>
                <h3>Add a break</h3>
                <div className='btn-break-time'>
                    <button onClick={()=>handleBreakTime(10)}>10s</button>
                    <button onClick={()=>handleBreakTime(20)}>20s</button>
                    <button onClick={()=>handleBreakTime(30)}>30s</button>
                    <button onClick={()=>handleBreakTime(40)}>40s</button>
                </div>
            </div>

            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h4>Exercise time</h4>
                    <p>{duration} seconds</p>
                </div>
                <div className='break-time-info'>
                    <h4>Break Time</h4>
                    <p>{times} seconds</p>
                </div>
            </div>

            <button onClick={notify} className='btn-complete'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default List;