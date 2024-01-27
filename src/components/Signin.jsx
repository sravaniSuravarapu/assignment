import React from 'react'

function Signin() {
  return (
    <div>
    <div><a className="btn btn-outline w-100 " style={{ borderColor: "#8064A2", color: "black" }} href="#!" role="button">
        <i className="fab fa-google me-2"></i>Continue with Twitter
      </a></div>
      <br></br>
      <div><a className="btn btn-outline w-100" style={{ borderColor: "#8064A2", color: "black" }} href="#!" role="button">
        <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
      </a></div>

      <div className="divider d-flex align-items-center my-4 black-divider">
     <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
    </div>

      <div className="form-outline mb-4">
        <input type="email" id="form1Example13" className="form-control form-control-lg" placeholder="email" />
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder="password" />
      </div>


<div className='d-flex justify-content-between'>
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
<label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
</div>
<div>Forgot password?</div>
</div>

       <div><a className="btn btn-outline w-100" style={{ borderColor: "#8064A2", color: "black" }} href="#!" role="button">
        Continue
      </a></div>
      </div>
  )
}

export default Signin