import React from 'react'
import quote from '../assests/quote.png';
import group from '../assests/Group 1251.png';
import profile from '../assests/Ellipse 12.png';

function Testimonals() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 ' style={{padding:"30px"}}>
            <div className=' border rounded-2 d-flex flex-column justify-content-center' style={{padding:"30px",backgroundColor:"#F7F5F9"}}>
            <div className='d-flex align-items-center'>
            <div><img src={quote} class="img-fluid" alt="quote" width={26} height={26}></img></div><h2>Testimonials</h2>
            </div>
                <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            
            <div className='row'>
            <div className='col-md-8 col-12'>
            <div className="container mt-5">
            <div className="custom-controls d-flex align-items-center  rounded-2 p-2 justify-content-around" style={{backgroundColor:"#CCC1DA",width:"90%"}}>
          
                  <div>
                  <img src={group} class="img-fluid" alt="group" width={40} height={40}></img></div>
                  <div className='d-flex' style={{width:"70%"}}><input type="range" min="0" max="100" value="0" className="form-range custom-progress " /><div>0.00</div>
                </div>
    
                 <div> 
                <audio controls style={{ display: 'none' }}>
                <source src="your-audio-file.mp3" type="audio/mp3" />
                </audio>
                <div><img src={profile} class="img-fluid" alt="profile" width={60} height={60}></img></div>
                </div>
                </div>
             </div>
             
               </div>
            <div className='col-12 col-md-3 d-flex align-items-center justify-content-around'>
            <div><img src={profile} class="img-fluid" alt="profile" width={100} height={100}></img></div>
             <div>
                <p>Shubha Nagarajan</p>
                <p>classical dancer</p>
             </div>
            </div>
        </div>
            
            
            
            </div>
            </div>

            
        </div>
        
        
    </div>
  )
  
}

export default Testimonals