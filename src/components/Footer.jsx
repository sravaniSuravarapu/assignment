import React from 'react';
import group11 from '../assests/Group 11.png';
import group64 from '../assests/Group 64.png';

function Footer() {
  return (
    <div className="container-fluid">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#FFFFFF' }}>
        
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5 p-2">
            {/* Grid row */}
            <div className="row mt-3">

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-black">Hobbycue</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-black">About us</a>
                </p>
                <p>
                  <a href="#!" className="text-black">Work with us</a>
                </p>
                <p>
                  <a href="#!" className="text-black">services</a>
                </p>
                <p>
                  <a href="#!" className="text-black">FaQ</a>
                </p>
                <p>
                  <a href="#!" className="text-black">contact us</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-black">How Do I</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-black">sign up</a>
                </p>
                <p>
                  <a href="#!" className="text-black">adding a list</a>
                </p>
                <p>
                  <a href="#!" className="text-black">claim listing</a>
                </p>
                <p>
                  <a href="#!" className="text-black">post query</a>
                </p>
                <p>
                  <a href="#!" className="text-black">add a blog post </a>
                </p>
                <p>
                  <a href="#!" className="text-black">other query</a>
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-black">Quick Links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-black">Listings</a>
                </p>
                <p>
                  <a href="#!" className="text-black">blog post</a>
                </p>
                <p>
                  <a href="#!" className="text-black">shop/store</a>
                </p>
                <p>
                  <a href="#!" className="text-black">Community</a>
                </p>
              </div>



              <div className="col-md-8 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-black">Social Media</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <div><img src={group64} className="img-fluid" alt="group64" /></div>
                <p>
                  <a href="#!" className="text-black">invite friends</a>
                </p>
                <div><img src={group11} className="img-fluid" alt="group11" /></div>
                
              </div>
              


              

            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-3 text-black" style={{ backgroundColor: '#F7F5F9' }}>
          ©Purple Cues Private Limited
          
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    // End of .container
  );
}

export default Footer;
