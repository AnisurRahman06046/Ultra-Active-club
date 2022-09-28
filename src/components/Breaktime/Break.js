import React from 'react';
import './Break.css'

const Break = () => {
    const btnhandler =  (time)=>{
        console.log(time)
    }
    return (
        <div>
            <h2>Add a break</h2>
            <div className='break-info'>
                <button onClick={()=>btnhandler(10)}>10s</button>
                <button onClick={()=>btnhandler(20)}>20s</button>
                <button onClick={()=>btnhandler(30)}>30s</button>
                <button onClick={()=>btnhandler(40)}>40s</button>
           </div>
        </div>
    );
};

export default Break;