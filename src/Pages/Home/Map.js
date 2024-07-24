import { faLocationDot , faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faMapMarkedAlt
import React from 'react';


function Map() {
  return (<>
            <div className='container-fluid position-relative'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.886118520883!2d82.90589327444795!3d25.375132924472346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2cb56aaaaaab%3A0x696093e56a41636e!2sCIVICCRAFT%20CRAFTING%20E-GOVERNANCE!5e0!3m2!1sen!2sin!4v1721723092520!5m2!1sen!2sin" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class=" d-flex justify-content-center customMapBox">
    <div class="info-box">
        <h2 className='mb-3'>Varanasi</h2>
        <p className='mb-3'><i > <FontAwesomeIcon color='#0391d3' icon={faLocationDot}/> </i> Varanasi: <a href="#">  Near Saryu Ghat</a></p>
        <div className='d-flex align-items-center mb-3'>
        <i> <FontAwesomeIcon color='#0391d3' icon={faClock}/> </i>
        <p className='font-weight-bold'>&nbsp;9:00 AM - 6:00 PM</p>
        </div>
        <div className='d-flex align-items-center'>
        <i> <FontAwesomeIcon color='#0391d3' icon={faPhone}/> </i>
        <div>
        <p > <a href='tel:+91 9874563210'>+91 9874563210</a> </p>
        <p > <a href='tel:+91 9875641230'>+91 9875641230</a></p>
        </div>
        </div>
        {/* <button class="btn btn-warning btn-search">Search</button> */}
    </div>
</div>
            </div>
  </>)
}


export default React.memo(Map);