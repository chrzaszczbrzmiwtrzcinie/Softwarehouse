import React from 'react'
import '../../Components/CSS/Contact.css'





const Contact = () => {
  return (
  <div className="contact" >
      <div className="container">
       <div className='contact3 window'>
         <div className='info-text'>
           <div className='element2'><h2>CONTACT US</h2>
           <h3 className='text'>Web & Mobile Software House</h3>
           <p className='p'>Implement solutions with impact. Digitize all aspects of your business and gain the technological advantage cooperating with commerce transformation experts. </p></div>
        </div>
      <div className='whole'>
        <div className='Email'>
         <div className='Emailform'>
           <div className='name-surname'>
            <label>Name</label>
            <input type="text" placeholder="Name..."></input>
          </div>
          <div className='float'>
            <label>Surname</label>
            <input type="text" placeholder="Surname..."></input>
          </div>
         <div class="form-item full ">
            <label>Email</label>
            <input type="email"  placeholder="Email..."/></div>
        < div class="form-item full ">
            <label>Phone</label>
            <input type="email" placeholder="Phone..."/></div>
        <div class="form-item full ">
            <label>Message</label>
            <textarea  placeholder="Your message..."></textarea>
        </div>
        <div className='choice'> 
            <label class="form-control-70">
            <input type="checkbox" name="checkbox-checked-state"/>
            <div className='accept'>I agree to the 
             <a className='s' target="_blank" href="/" title="Terms &amp; Conditions"> terms of service</a> and <a className='s' target="_blank" href="/" title="Privacy Policy"> privacy policy</a>
           </div>
            </label>
        </div>
        <div class="btn-container">
        <button class="btns fuckjent">Send Your message</button>
        </div>
      </div>
    </div>
  </div>
  </div>
 </div>
 </div>
  )
}
export default Contact;