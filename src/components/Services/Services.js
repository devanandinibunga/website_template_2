import React from 'react';
import './Services.scss';
import { jevelincontext } from '../JevelinDataContext/JevelinDataContext';
// import {TfiMobile} from 'react-icons/tfi';

export const Services = () => {
// const servicesData=[
//     {icon:<TfiMobile/>,title:"Responsive Design",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",price:"25",backgroundImage:"https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_service_1.jpg"},
//     {icon:<TfiMobile/>,title:"Multi-purpose",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",price:"54",backgroundImage:"https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_service_2.jpg"},
//     {icon:<TfiMobile/>,title:"Friendly Support",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",price:"86",backgroundImage:"	https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_service_3.jpg"},
// ]
// const getBackgroundImage=(service)=>{
//     document.getElementById("serviceContainer").style.backgroundImage = `url(${service.image})`;
//     // document.getElementById("serviceContainer").style.backgroundColor = "red";

// }
  return (
    <div className='services-container'>
        <div className='services-main-container'>
          <jevelincontext.Consumer>
            {({servicesData})=>{return(
              <>
        {servicesData.map((service,i)=>
        <div key={i} className='services-inner-container' style={{
            backgroundImage: `url(${service.backgroundImage})`,
          }} >
            <p className='services-inner-container-icon'>{service.icon}</p>
            <h1 className='services-inner-container-title'>{service.title}</h1>
            <p className='services-inner-container-para'>{service.description}</p>
            <button className='services-inner-container-btn'>${service.price}/mon</button>
        </div>
        )}
        </>
        )}
        }
        </jevelincontext.Consumer>
        </div>
        <div className='services-bottom-container'> 
            <p className='services-bottom-container-para'>Lorem ipsum dolor sit amet, consectetuer<strong> adipiscing elit,</strong>  sed diam nonummy nibh <strong>euismod tincidunt</strong> ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
    </div>
  )
}
