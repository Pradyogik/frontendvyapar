import React from 'react';
import img from '../../Assets/Group 1000004884.png';

function BannerImg() {
  return (<>

<div className='container'>
    <h2 style={{fontWeight: 700}} className=' text-center mb-0'>Revolutionize Your Customer Experience</h2>
    <h4 className=' text-center'>Discover the Power of Our WhatsApp Chatbot!</h4>
    <img style={{width: '100%', height: '100%' , objectFit: 'cover'}} src={img} />

</div>


  </>)
}


export default React.memo(BannerImg)