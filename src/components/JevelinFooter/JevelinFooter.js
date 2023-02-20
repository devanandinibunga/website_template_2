import React from 'react';
import './JevelinFooter.scss'
import {FiFacebook,FiTwitter,FiInstagram,FiYoutube} from 'react-icons/fi';

export const JevelinFooter = () => {
    const jevelinFooterData=[{icon:<FiFacebook/>},{icon:<FiTwitter/>},{icon:<FiInstagram/>},{icon:<FiYoutube/>}]
  return (
    <div className='jevelin-footer-container'>
        <img className='jevelin-footer-img' src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/07/logo_11_2.png" alt="jevelin-footer-img"/>
        <span className='jevelin-footer-para'>Multi-purpose Wordpress Theme</span>
        <div className='jevelin-footer-icon-container'>
            {jevelinFooterData.map((icons,i)=>
            <span key={i} className='jevelin-footer-icon'>{icons.icon}</span>
            )}
        </div>
    </div>
  )
}
