import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../bootstrap.min.css';
import '../index.css';


function ThirdPage() {
    return(
        <React.Fragment>
        <section className="py-5 py-md-2 bg-dark-gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        <div className="text-dark">
                            {/* ============ Heading ====================== */}
                            <h1 className=" display-2">Contact</h1>
                            <p className="text-muted">We always want to hear from you</p>

                        </div>
                          
                    </div>  
                </div>
            </div>
        </section>  

            
    {/* Place info */}
    <section className="py-5 py-md-5 border-bottom border-gray-300">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            

          </div>
        </div> 
        <div className="row">
          <div className="col-12 col-md-4 text-center border-right border-gray-300">
            
            {/* Heading */}
            <h6 className="text-uppercase text-gray-700 mb-1">
              Message us
            </h6>

            {/* link */}
            <div className="mb-5 mb-md-0">
              <a href="action" className="h4 text-decoration-none pink">
                Start a chat!
              </a>
            </div>

          </div>
          <div className="col-12 col-md-4 text-center border-right border-gray-300">
            
            {/* heading */}
            <h6 className="text-uppercase text-gray-700 mb-1">
              Call anytime
            </h6>

            {/* link */}
            <div className="mb-5 mb-md-0">
              <a href="action" className="h4 text-decoration-none pink">
                (234) 123-4567
              </a>
            </div>

          </div>
          <div className="col-12 col-md-4 text-center">
            
            {/* heading */}
            <h6 className="text-uppercase text-gray-700 mb-1">
              Email us
            </h6>

            {/* link */}
            <a href="action" className="h4 text-decoration-none pink">
              welovecode.co
            </a>

          </div>
        </div> 
      </div>
    </section>

    {/* <!-- FORM    ================================================== --> */}
    <section className="pt-5 pt-md-5 pb-5 pb-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            {/* <!-- Heading --> */}
            <h2 className="font-weight-bold">
              Let us hear from you directly!
            </h2>

            {/* <!-- Text --> */}
            <p className="font-size-lg text-muted mb-5 mb-md-5">
              We always want to hear from you! Let us know how we can best help you and we'll do our very best.
            </p>

          </div>
        </div> 
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10">
            
            {/* <!-- Form --> */}
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group mb-5">
                        
                        {/* <!-- Label --> */}
                        <label htmlFor="contactName">
                        Full name
                        </label>

                        {/* <!-- Input --> */}
                        <input type="text" className="form-control" id="contactName" placeholder="Full name" />

                    </div>
                  </div>
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">
                    
                    {/* <!-- Label --> */}
                    <label htmlFor="contactEmail">
                      Email
                    </label>

                    {/* <!-- Input --> */}
                    <input type="email" className="form-control" id="contactEmail" placeholder="hello@domain.com" />

                  </div>
                </div>
              </div> 
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-5 mb-md-5">
                    
                    {/* <!-- Label --> */}
                    <label htmlFor="contactMessage">
                      What can we help you with?
                    </label>

                    {/* <!-- Input --> */}
                    <textarea className="form-control" id="contactMessage" rows="5" placeholder="Tell us what we can help you with!"></textarea>

                  </div>
                </div>
              </div> 
              <div className="row justify-content-center">
                <div className="col-auto">
                  
                  {/* <!-- Submit --> */}
                  <button type="submit" className="btn btn-primary lift">
                    Send message
                  </button>

                </div>
              </div> 
            </form>

          </div>
          </div>
        </div> 
    </section>  

               
   
  </React.Fragment>

    );
}

export default ThirdPage;