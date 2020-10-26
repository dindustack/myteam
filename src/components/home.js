import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../bootstrap.min.css';
import '../index.css';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import picture1 from '../assets/illustration-1.jpg';

function FirstPage() {
    return(
        <React.Fragment>
        <section className="pt-4 pt-md-5 mb-5">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-12 col-md-6 col-lg-6 order-md-2">
                    <img src={picture1} alt='pm' className='img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0'/>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 order-md-1">
                      <h1 className="display-1 font-weight-bolder text-md-left">Find the best <span className="pink">talent.</span></h1>
                      <p className='lead text-center text-muted text-md-left mb-lg-2'>Finding the right people and building high performing teams
                          can be hard. Most companies aren't tapping into the abundance
                          of global talent. We're about to change that.
                      </p> 
                  </div>
              </div>
            </div>
        </section>
            
      {/* ============ Features ============ */}
      <section className='py-5 py-md-0'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
                {/* ============ Icons ============ */}
                <div className="icon text-primary mb-3">
                  <i className="text-black">
                    <svg width="54px" height="54px" viewBox="0 0 20 20" fill="#161c2d">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>        
                  </i>
                </div>
                {/* ============ Heading ============ */}
                <h3 className="pink">Experienced Individuals</h3>

                {/* ============ Text ============ */}
                <p className="text-muted mb-5 mb-md-0">Our network is made up of highly
                        experienced professionals who are passionate about what they do.
                </p>
            </div>  

            <div className="col-12 col-md-4">
                {/* ============ Icons ============ */}
                <div className="icon text-primary mb-3">
                  <i className="text-black">
                    <svg width="54px" height="54px" viewBox="0 0 20 20" fill="#161c2d">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </i>
                </div>
                {/* ============ Heading ============ */}
                <h3 className="pink">Easy to implement</h3>

                {/* ============ Text ============ */}
                <p className="text-muted mb-5 mb-md-0">Our teams have been refined over
                      years of implementation meaning our teams always deliver.
                </p>
            </div>   

            <div className="col-12 col-md-4">
                {/* ============ Icons ============ */}
                <div className="icon text-primary mb-3">
                  <i className=" text-black">
                  <svg  width="54px" height="54px" viewBox="0 0 20 20" fill="#161c2d">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                  </i>
                </div>
                {/* ============ Heading ============ */}
                <h3 className="pink">Enhanced Productivity</h3>

                {/* ============ Text ============ */}
                <p className="text-muted mb-5 mb-md-0">Our customized platform
                      with in-buit analytics helps you manage your distributed teams.
                </p>
            </div>   
          </div>     
        </div>
      </section>
  {/* End Values Section */}

  {/* ================= Start Testimonials Area ============================= */}
  <section className="pt-5 pt-md-5 mb-md-5 bg-gradient-light">
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 text-center">
      <h1>
          Delivering real results for top companies. Some of 
          our <span className="pink"> success stories.</span>
        </h1>
      </div>
      <div className="row pt-5 pt-md-5">
        <div className="col-12 col-md-4">
          <div className="card mb-5 mb-md-0 border-dark text-center shadow ">
            <div className="profile-thumbnail mx-auto mt-n6">
              <div className="text-center">
                  <img src={client1} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
              </div>
            </div>
            <div className="card-body">
                <p className="card-text lead text-center text-dark mb-3 mb-md-3">"The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned."
                </p>
                <h4 className="card-text text-center font-weight-bolder pink">Kady Baker</h4>
                <p className="card-text text-center small test-color">Product Manager at Bookmark</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card mb-5 mb-md-0 border-dark text-center shadow ">
            <div className="profile-thumbnail mx-auto mt-n6">
              <div className="text-center">
                  <img src={client2} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
              </div>
            </div>
            <div className="card-body">
                <p className="card-text lead text-center text-dark mb-3 mb-md-3">"Our teams helped us build 
                  an app that delivered a new a new experience for hiring a physio. The launch was an instant 
                  success with 100k downloads in the first month."
                </p>
                <h4 className="card-text text-center font-weight-bolder pink">Alysha Reese</h4>
                <p className="card-text text-center small test-color">Founder of Momage</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card mb-5 mb-md-0 border-dark text-center shadow">
            <div className="profile-thumbnail mx-auto mt-n6">
              <div className="text-center">
                  <img src={client3} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
              </div>
            </div>
            <div className="card-body">
                <p className="card-text lead text-center text-dark mb-3 mb-md-3">"The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned."
                </p>
                <h4 className="card-text text-center font-weight-bolder pink">Grace Davis</h4>
                <p className="card-text text-center small test-color">Cofounder of myphysio</p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  </section>
  {/* End Testimonials Area */}

    {/*=================== Start Contact ================= */}
    <section className="py-5 py-md-5 dark-shade">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-4 text-white mb-5 mb-md-5">Ready to get started?</h1>
              <button type="button" className="btn btn-primary lift"><Link to="/contact" className="nav-link text-white">Contact us</Link></button>
            </div>
          </div>
        </div>
    </section>
    </React.Fragment>
  );
}

export default FirstPage;