import React from 'react';
import './infoBar.scss';
import Profile from '../assets/profile-ava.jpg';
import facebook from '../assets/icons/facebook.svg';
import globe from '../assets/icons/globe.svg';
import instagram from '../assets/icons/instagram.svg';
import star from '../assets/icons/star.svg';
import spot from '../assets/icons/spot.svg';
import tag from '../assets/icons/tag.svg';
import heart from '../assets/icons/heart.svg';

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
                    <div className='social-icons-wrap'>
                        <a className='social-link globe' href="http://www.nakonechnyi.com/" target='_blank'>
                            <img src={globe} className='social-icon' alt='globe icon'/>
                        </a>
                        <a className='social-link facebook' href="https://www.facebook.com/nakonechnyi.o" target='_blank'>
                            <img src={facebook} className='social-icon'alt='facebook icon'/>
                        </a>
                        <a className='social-link instagram' href="https://www.instagram.com/nakonechnyi_o/" target='_blank'>
                            <img src={instagram} className='social-icon' alt='instagram icon'/>
                        </a>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='right-top'>
                        <div className='user-name-wrap'>
                            <span className='user-name'>Олександр Наконечний</span>
                            <div className='status-cont'>
                                <span className='status'>PRO</span>
                            </div>
                        </div> 
                        <div className='rewiev-wrap'>
                            <div className='star-wrap'>
                                <img className='star-icon' src={star} alt='star icon'/>
                                <img className='star-icon' src={star} alt='star icon'/>
                                <img className='star-icon' src={star} alt='star icon'/>
                                <img className='star-icon' src={star} alt='star icon'/>
                                <img className='star-icon' src={star} alt='star icon'/>
                            </div>
                            <span className='rewiev'>Залишити відгук</span>
                        </div>
                    </div>
                    <div className='right-bottom'>
                        <div className='info-cont'>
                            <div className='info-cont-left-right'>
                                <div className='info-cont-left'>
                                    <div className='info-cont-top'>
                                        <div className='info-cont-top-item'>
                                            <img className='spot-icon' src={spot} alt='spot icon'/>
                                            <span className='cities'>Київ,</span>
                                            <span className='cities'>Львів, </span>
                                            <span className='cities'>Івано-Франківськ,</span>
                                            <span className='cities'>Тернопіль</span>
                                        </div>
                                        <div className='info-cont-top-item'>
                                            <span className='phone-title'>телефон:</span>
                                        </div>
                                        <div className='info-cont-top-item'>
                                            <span className='price-title'>ціна від:</span>
                                        </div>
                                    </div>
                                    <div className='info-cont-mid'>
                                        <div className='info-cont-mid-item'>
                                            <img className='tag-icon photografers-element' src={tag} alt='tag icon'/>
                                            <span className='photografers photografers-element'>{'Фотографи'}</span>
                                        </div>
                                        <div className='info-cont-mid-item'>
                                            <span className='phone'>{'(067) 208-37-00'}</span>
                                        </div>
                                        <div className='info-cont-mid-item'>
                                            <span className='price'>{10000 + ' грн'}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='info-cont-right'>
                                    {/* <img className='heart' src={heart} alt='heart icon'/> */}
                                    <span className='heart'>{350}</span>
                                </div>
                            </div>
                            <div className='info-cont-bottom'>
                                <span className='info-cont-disc'>{'Найкращі моменти Вашого весілля у стильному виконанні. Аерозйомка у подарунок.'}</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
