import React from 'react'
import one from '../assests/shopping_basket_black_24dp (2) 1.png';
import two from '../assests/location_on_black_24dp 1.png';
import three from '../assests/groups_black_24dp (1) 1.png';
import four from '../assests/event_available_black_24dp 2.png';


function Listing() {
  return (
    <div className='container-fluid'>
        <div className='row' style={{padding:"15px"}}>
            <div className='col-12 col-md-6' style={{padding:"15px"}}>
            <div className=' border rounded-2 d-flex flex-column justify-content-center' style={{height:"200px",padding:"30px"}}>
            <div className='d-flex align-items-center'>
            <div><img src={three} class="img-fluid" alt="three" width={26} height={26}></img></div><h2>People</h2>
            </div>
            
                <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                <div><a className="btn btn-outline " style={{ borderColor: "#8064A2", color: "#8064A2" }} href="#!" role="button">
                      connect
                </a></div>
            </div>
            </div>
            <div className='col-12 col-md-6 ' style={{padding:"15px"}} >
            <div className=' border rounded-2 d-flex flex-column justify-content-center' style={{height:"200px",padding:"40px"}}>
            <div className='d-flex align-items-center'>
            <div><img src={two} class="img-fluid" alt="two" width={26} height={26}></img></div><h2>Place</h2></div>
                <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                <div><a className="btn btn-outline " style={{ borderColor: "#8064A2", color: "#8064A2" }} href="#!" role="button">
                      make it
                </a></div>
            </div>
            </div>
        </div>
        <div className='row' style={{padding:"15px"}}>
            <div className='col-12 col-md-6' style={{padding:"15px"}}>
            <div className='border rounded-2 d-flex flex-column justify-content-center' style={{height:"200px",padding:"30px"}}>
            <div className='d-flex align-items-center'>
            <div><img src={one} class="img-fluid" alt="one" width={26} height={26}></img></div><h2>Product</h2></div>
                <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                <div><a className="btn btn-outline " style={{ borderColor: "#8064A2", color: "#8064A2" }} href="#!" role="button">
                      get it
                </a></div>
            </div>
            </div>
            <div className='col-12 col-md-6' style={{padding:"15px"}}>
            <div className='border rounded-2 d-flex flex-column justify-content-center' style={{height:"200px",padding:"30px"}}>
            <div className='d-flex align-items-center'>
            <div><img src={four} class="img-fluid" alt="four" width={26} height={26}></img></div><h2>Program</h2></div>
                <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                
                <div><a className="btn btn-outline " style={{ borderColor: "#8064A2", color: "#8064A2" }} href="#!" role="button">
                      attend
                </a></div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Listing