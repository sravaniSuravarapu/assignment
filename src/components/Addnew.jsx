import React from 'react'
import Add from '../assests/Add.png';
import { Link } from "react-router-dom";


function Addnew() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 ' style={{padding:"30px"}}>
            <div className=' border rounded-2 d-flex flex-column justify-content-center' style={{height:"300px",padding:"30px"}}>
            <div className='d-flex align-items-center'>
            <div><img src={Add} class="img-fluid" alt="Add" width={26} height={26}></img></div><h2>Add your own</h2>
            </div>
                <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <Link to="/addnew">
                <div><a className="btn btn-outline " style={{ borderColor: "#8064A2", color: "#8064A2" }} href="#!" role="button">
                      Add new
                </a></div>
                </Link>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Addnew