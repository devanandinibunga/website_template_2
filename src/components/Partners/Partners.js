import React from 'react';
import './Partners.scss';
import { jevelincontext } from '../JevelinDataContext/JevelinDataContext';
// import Carousel from 'react-grid-carousel';


export const Partners = () => {
    // const partnersData=[
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_3.png",
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    //     "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    // ]
 
   
  return (


<div class="container">
  {/* <div class="sliding-background">
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png" alt="envato"/> 
        <img width={"180px"} src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png" alt="envato"/> 
        <img width={"180px"}  src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png" alt="envato"/> 
        <img width={"180px"} src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png" alt="envato"/> 
        <img width={"180px"} src="https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png" alt="envato"/> 
  </div> */}
  <div className='sliding-background'>
    <jevelincontext.Consumer>
      {({partnersData})=>{
        return(
          <>
          {partnersData.map((image,i) =>
            <img key={i} src={image} alt="/"/>
          )}
          </>
        )
      }}
    </jevelincontext.Consumer>
  </div>
</div>
  )
}
