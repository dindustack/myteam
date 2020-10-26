import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/navigation.js';
import FirstPage from './components/home.js';
import SecondPage from './components/about.js';
import ThirdPage from './components/contact.js';
import Footer from './components/footer.js';
import './index.css';
import './bootstrap.min.css';



export default function App () {
  return (
    <Router>

      {/* ========== Navigation Starts =========*/}
        <Navigation />
       {/* ========== Navigation Starts =========*/}
      
      {/* Switch Start */}
      <Switch>
      {/*============ Router Start ============== */}
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/contact"><Contact /></Route>
      {/*============== Router End ===================*/}
      </Switch>

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </Router>

    
  );
}


function Home() {
  return (
    <FirstPage />
  );
}

function About() {
  return (
    <SecondPage />
  );
}
function Contact() {
  return (
    <ThirdPage />
  );
}



   




   
