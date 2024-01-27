import React from 'react'
import image from '../assests/Group 99 (1).png';
import '../app.css'


function Explore() {
  return (
    <div className='container-fluid '>
        <div className='row'>
            <div className='col-12'>
            <div className=' p-2 d-flex flex-column justify-content-around' style={{ height: "70vh", marginTop: "30px",paddingLeft:"20px" }}>
            <h2>
             your <span style={{color:"#0096C8"}}>hobby</span> your<span style={{color:"#8064A2"}}>community</span>
             <div><button type="button" class="btn" style={{ backgroundColor:"#8064A2",color:"white"}}>Get started</button></div>
            </h2>
            </div>
            </div>
            <div className='col-12'> 
            <img src={image} className="img-fluid" alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Explore