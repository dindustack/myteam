import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../bootstrap.min.css';
import '../index.css';
import avatar6 from '../assets/avatar6.jpg';
import avatar7 from '../assets/avatar7.jpg';
import avatar8 from '../assets/avatar8.jpg';
import avatar9 from '../assets/avatar9.jpg';
import avatar10 from '../assets/avatar10.jpg';
import avatar11 from '../assets/avatar11.jpg';
import avatar12 from '../assets/avatar12.jpg';
import avatar13 from '../assets/avatar13.jpg';
import avatar14 from '../assets/avatar14.jpg';
import instagram from '../assets/social/instagram.svg';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import pinterest from '../assets/social/pinterest.svg';

function SecondPage() {
    return(
    <React.Fragment>
        {/*========== Welcome ============= */}
    <section className="py-5 py-md-5 border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* =============== Heading ========= */}
            <h1 className="display-2">Diverse team. Great Impact</h1>
            {/* ============ Text ================ */}
            <p className="text-muted mb-5 mb-md-5">We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive innovation
                and deliver incredible outcomes. Talented diverse teams shape the best 
                products and experiences. We'll bring those teams to you.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
                {/* ===== Image ====== */}
                <div className="form-row">
                    <div className="col-4">
                        <img src={avatar6} alt='avatar' className="img-fluid rounded shadow-lg" />
                    </div>

                    <div className="col-3">
                        <img src={avatar9} alt='avatar' className="img-fluid rounded shadow-lg mb-4" />
                        <img src={avatar12} alt='avatar' className="img-fluid rounded shadow-lg mt-1" />
                    </div>

                    <div className="col-5">
                        <div className="form-row mb-4">
                            <div className="col-5">
                                <img src={avatar7} alt='avatar' className="img-fluid rounded shadow-lg" />
                            </div>

                            <div className="col-7">
                                <img src={avatar11} alt='avatar' className="img-fluid rounded shadow-lg" />
                            </div>

                           <img src={avatar14} alt='avatar' className="img-fluid rounded shadow-lg mt-1" /> 
                        </div>
                    </div>
                
                </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>

    {/* ==================Start Team ====================*/}
    <section className="pt-5 pt-md-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md">
           {/* ============== Heading========== */}
           <h2 className="display-4 text-dark mb-0">Team</h2>
          </div>
        
            {/* Client 1 */}
            <div className="row mt-5 mt-md-2">
                <div className="col-12 col-md-3">
                    <div className="card card-sm mt-5 shadow-lg directors">
                        <div className="profile-thumbnail mx-auto mt-n6">
                            <div className="text-center">
                                <img src={avatar10} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
                            </div>
                        </div>
                        <div className="card-body px-0 text-center">
                            <h5 className="card-text text-center font-weight-bold">Richard Simpson</h5>
                            <p className="card-text text-center small text-muted">CEO</p>  
                            {/* ============== Socials ================== */}
                            <ul className="list-unstyled list-inline list-social mb-5 mb-md-0">
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={instagram} alt={instagram} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                            <img src={facebook} alt={facebook} className="list-social-icon"  />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none" >
                                            <img src={twitter} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={pinterest} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>         
                    
                             </ul>
                        </div>
                     </div>

                </div>
                <div className="col-12 col-md-3">
                    <div className="card card-sm mt-5 shadow-lg directors">
                        <div className="profile-thumbnail mx-auto mt-n6">
                            <div className="text-center">
                                <img src={avatar13} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
                            </div>
                        </div>
                        <div className="card-body px-0 text-center">
                            <h5 className="card-text text-center font-weight-bold">Liddy Buchanan</h5>
                            <p className="card-text text-center small text-muted">VP Engineering</p>  
                            {/* ============== Socials ================== */}
                            <ul className="list-unstyled list-inline list-social mb-5 mb-md-0">
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={instagram} alt={instagram} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                            <img src={facebook} alt={facebook} className="list-social-icon"  />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none" >
                                            <img src={twitter} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={pinterest} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>         
                    
                             </ul>
                        </div>
                     </div>

                </div>
                <div className="col-12 col-md-3">
                    <div className="card card-sm mt-5 shadow-lg directors">
                        <div className="profile-thumbnail mx-auto mt-n6">
                            <div className="text-center">
                                <img src={avatar7} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
                            </div>
                        </div>
                        <div className="card-body px-0 text-center">
                            <h5 className="card-text text-center font-weight-bold">Jenny Haleen</h5>
                            <p className="card-text text-center small text-muted">Head of Product</p>  
                            {/* ============== Socials ================== */}
                            <ul className="list-unstyled list-inline list-social mb-5 mb-md-0">
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={instagram} alt={instagram} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                            <img src={facebook} alt={facebook} className="list-social-icon"  />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none" >
                                            <img src={twitter} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={pinterest} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>         
                    
                             </ul>
                        </div>
                     </div>

                </div>
                <div className="col-12 col-md-3">
                    <div className="card card-sm mt-5 shadow-lg directors">
                        <div className="profile-thumbnail mx-auto mt-n6">
                            <div className="text-center">
                                <img src={avatar8} alt="pm" className="rounded-circle shadow img-fluid card-img-top border-0"/>
                            </div>
                        </div>
                        <div className="card-body px-0 text-center">
                            <h5 className="card-text text-center font-weight-bold">Kevin Qwest</h5>
                            <p className="card-text text-center small text-muted">CTO</p>  
                            {/* ============== Socials ================== */}
                            <ul className="list-unstyled list-inline list-social mb-5 mb-md-0">
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={instagram} alt={instagram} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                            <img src={facebook} alt={facebook} className="list-social-icon"  />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none" >
                                            <img src={twitter} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item mr-3">
                                    <a href="action" className="text-decoration-none">
                                        <img src={pinterest} alt={twitter} className="list-social-icon" />
                                    </a>
                                </li>         
                    
                             </ul>
                        </div>
                     </div>

                </div>
              
              </div>
            </div>
        </div>
    </section>

      {/* ===================== CTA ==================== */}
      <section className="pt-5 pt-md-5">
      <div className="container pb-5 pb-md-5 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            
            {/* =========== Heading ==================== */}
            <h3 className="font-weight-bold mb-1">
              Interested in joining our team?
            </h3>

            {/* <!-- Text --> */}
            <p className="font-size-lg text-muted mb-5 mb-md-0">
              Hit us up and we'll get in touch with you.
            </p>

          </div>
          <div className="col-12 col-md-auto">
            
            {/* <!-- Button --> */}
            <a href="action" className="btn btn-primary lift">
              Apply now
            </a>

          </div>
        </div> 
        {/* <!-- / .row --> */}
      </div>
    </section>
    </React.Fragment>
    );

}

export default SecondPage;