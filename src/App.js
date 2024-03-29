import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Footer from './Components/Footer/Footer';
import About from './pages/About/About';
import Faq from './pages/Faq/Faq';

const App = () => {
  return (
   <Router>
   
    
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/about" exact>
          <About/>
          <Faq/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Redirect to="/" />
      </Switch> 
    </main>
    <Footer/> 
    
   </Router>
   
  );
}



export default App;
