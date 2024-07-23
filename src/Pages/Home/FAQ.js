import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function FAQ() {

  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  return (<>

<div className="container-fluid faqSection py-5">
      <div>
        <h1 className="font-weight-bold text-center text-white pt-5">FAQ's</h1>
      </div>

      <div className=' faqDflex container'>
        
          <div className="faqWrapper py-5 d-block">
            <div id="accordion" className="accordion">
              <div className="card faqCard">
                <div
                  className="card-header collapsed d-flex justify-content-between"
                  onClick={() => handleToggle('collapseOne')}
                >
                  <a className="card-title faqTitle">What services do you offer? </a>
                  <FontAwesomeIcon className='ml-auto' icon={faAngleDown} />
                </div>
                <div
                  id="collapseOne"
                  className={`card-body faqCardBody collapse ${openCard === 'collapseOne' ? 'show' : ''}`}
                >
                  <p>
                    This is dependent on the water source and your usage. Changes in the water source might disrupt your maintenance schedule. Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system. The schedules may range from every 5 months to every 3 years.
                  </p>
                </div>

                <div
                  className="card-header d-flex justify-content-between bg-white collapsed"
                  onClick={() => handleToggle('collapseFour')}
                >
                  <a className="card-title faqTitle">How do you support clients?</a>
                  <FontAwesomeIcon  icon={faAngleDown} />
                </div>
                <div
                  id="collapseFour"
                  className={`card-body faqCardBody collapse ${openCard === 'collapseFour' ? 'show' : ''}`}
                >
                  We offer dedicated help desk and support services to assist clients post-implementation. Our support team is available to handle inquiries, troubleshoot issues, manage refunds and cancellations, and ensure smooth operation of the deployed systems. We also provide continuous monitoring and updates to keep the systems running efficiently.
                </div>

                <div
                  className="card-header d-flex justify-content-between bg-white collapsed"
                  onClick={() => handleToggle('collapseFive')}
                >
                  <a className="card-title faqTitle">How can I contact you?</a>
                  <FontAwesomeIcon  icon={faAngleDown} />
                </div>
                <div
                  id="collapseFive"
                  className={`card-body faqCardBody collapse ${openCard === 'collapseFive' ? 'show' : ''}`}
                >
                  This is dependent on the water source and your usage. Changes in the water source might disrupt your maintenance schedule. Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system. The schedules may range from every 5 months to every 3 years.
                </div>
              </div>
            </div>
          </div>


        <div className=" faqWrapper py-5 d-block">
          <div
            className="card-header d-flex justify-content-between bg-white collapsed"
            onClick={() => handleToggle('collapseTwo')}
          >
            <a className="card-title faqTitle">How can I contact you?</a>
            <FontAwesomeIcon  icon={faAngleDown} />
          </div>
          <div
            id="collapseTwo"
            className={`card-body faqCardBody bg-white collapse ${openCard === 'collapseTwo' ? 'show' : ''}`}
          >
          <p> We offer dedicated help desk and support services to assist clients post-implementation. Our support team is available to handle inquiries, troubleshoot issues, manage refunds and cancellations, and ensure smooth operation of the deployed systems. We also provide continuous monitoring and updates to keep the systems running efficiently.</p>
          </div>

          <div
            className="card-header d-flex justify-content-between bg-white collapsed"
            onClick={() => handleToggle('collapseThree')}
          >
            <a className="card-title faqTitle">How do you support clients?</a>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div
            id="collapseThree"
            className={`card-body faqCardBody bg-white collapse ${openCard === 'collapseThree' ? 'show' : ''}`}
          >
           <p> We offer dedicated help desk and support services to assist clients post-implementation. Our support team is available to handle inquiries, troubleshoot issues, manage refunds and cancellations, and ensure smooth operation of the deployed systems. We also provide continuous monitoring and updates to keep the systems running efficiently.</p>
          </div>
        </div>
      </div>
    </div>

  </>)
}


export default React.memo(FAQ);