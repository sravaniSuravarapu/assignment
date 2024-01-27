import React from 'react';
import hero from '../assests/Group 27 (2).png';
import '../app.css';
import Signin from './Signin';
import Join from './Join';
import { useState } from 'react';

function Herosection() {
  const [content, setContent] = useState('signin');

  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='p-2 d-flex flex-column justify-content-around' style={{ height: "70vh", marginTop: "30px", paddingLeft: "20px" }}>
            <h2>
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span>
            </h2>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate, or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
            <img src={hero} className="img-fluid" alt="hero" />
          </div>
        </div>
        <div className='col-12 col-md-6'>
          {/* here starts the form */}
          <section className="" style={{ height: "90vh" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-10">
                  <form>
                    <div className='d-flex justify-content-between' style={{ marginBottom: "20px", width: "109px" }}>
                      <span style={{ borderBottom: "2px solid #8064A2", color: "#8064A2" }}><a onClick={() => handleButtonClick('signin')} href='#'>Sign In</a></span>
                      <span style={{ color: "black" }}><a onClick={() => handleButtonClick('joinin')} href='#'>Join In</a></span>
                    </div>
                    <div>
                      {content === 'signin' && <Signin />}
                      {content === 'joinin' && <Join />}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
