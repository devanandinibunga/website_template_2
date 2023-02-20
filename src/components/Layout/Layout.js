import React from 'react';
import './Layout.scss';


export const Layout = () => {
  return (
    <div className='layout-container'>
            <div className='layout-image-container'>
                <img className='layout-container-image' src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_img_2.png" alt="layout-logo"/>
            </div>
            <div className='layout-right-container'> 
                <h1 className='layout-right-container-title'>Multiple header layout presets for maximum versatility!</h1>
                <p className='layout-right-container-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida urna eros, quis viverra justo tristique finibus. Morbi rutrum ex ultricies, mollis magna sed, aliquam risus. Ut nec euismod massa, vel maximus ante. Sed blandit convallis risus a vulputate.</p>
                <button className='layout-right-container-btn'>LEARN MORE</button>
            </div>
    </div>
  )
}
