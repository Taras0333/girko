import React from 'react';
import './infoBar.scss';
import Profile from '../assets/profile-ava.jpg';

export default function InfoView() {
    return (
        <div className='infoBar-container'>
            <div className='blur-cover'></div>
            <div className='infoBar-inner-cont'>
                <div className='left-side'>
                    <div className='first-wrap'>
                        <div className='second-wrap'>
                            <img className='profile-photo' src={Profile} alt='profile photo'/>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
