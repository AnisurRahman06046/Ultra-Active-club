import React from 'react';
import './List.css'
import propic from '../../images/myimg.jpg'

const List = () => {
    return (
        <div>
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


            <div>
                <h3>Add a break</h3>
                <div className='btn-break-time'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
        </div>
    );
};

export default List;