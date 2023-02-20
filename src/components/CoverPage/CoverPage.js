import React from 'react';
import './CoverPage.scss';

export const CoverPage = () => {

  

  return (
    <div className='cover-page-container'>
      
      {/* <div id='main'> */}
        <h1 className='cover-page-container-title'>From the sky-high you opportunity<span className='cover-page-container-span'> strikes now!</span></h1>
        <p className='cover-page-container-para'>Subscribe and be the first one to get the product</p>
        <div className='cover-page-input-container'>
            <input className='cover-page-input' placeholder='Name'/>
            <input className='cover-page-input' placeholder='Last Name'/>
            <input className='cover-page-input-email' placeholder='E-mail'/>
            <button className='cover-page-button'>SUBSCRIBE NOW</button>
        </div>
        <p className='cover-page-container-bottom-para'> WE DON'T SHARE YOUR PERSONAL INFO WITH ANYONE<span className='cover-page-container-bottom-para-span'>PRIVATE POLICY</span></p>
        {/* </div> */}
    </div>
  )
}
