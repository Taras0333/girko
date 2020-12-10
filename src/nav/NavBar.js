import React from 'react';
import './nav.scss';
import logo from '../assets/logo.svg';

export default function NavView() {
    return (
        <div className='nav'>
            <div className='nav-wrap'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt='logo icon'/>
                    <span className='title text'>GIRKO</span>
                </div>
                <div className='nav-container'>
                    <span className='nav-items'>Фотографи</span>
                    <span className='nav-items'>Відеооператори</span>
                    <span className='nav-items'>Музиканти</span>
                    <span className='nav-items'>Ведучі</span>
                    <span className='nav-items'>Ресторани</span>
                </div>
                <div className='login-container'>
                    <button className='login-btn nav-btn'>ВХІД</button>
                    <button className='signup-btn nav-btn'>РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </div>
    )
}
