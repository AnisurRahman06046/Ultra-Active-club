import React from 'react';
import './Profile.css';
import mypic from '../../images/myimg.jpg'


const Profile = () => {
    return (
        <div>
           <div className='profile'>
                <img src={mypic} alt="" />
                <h4>Md Amir Khan</h4>
           </div>
           <div className='profile-info'>
            <div className='weight'>
                <h2>75<small style={{fontSize:'15px'}}>kg</small></h2>
                <p style={{marginTop:'-15px'}}>Weight</p>
            </div>
            <div className='height'>
                <h2>6.5</h2>
                <p style={{marginTop:'-15px'}}>Height</p>
            </div>
            <div className='age'>
                <h2>25<small style={{fontSize:'15px'}}>yrs</small></h2>
                <p style={{marginTop:'-15px'}}>Age</p>
            </div>
           </div>
        </div>
    );
};

export default Profile;