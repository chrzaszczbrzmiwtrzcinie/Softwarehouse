import React from 'react'
import './../../Components/CSS/App.css';
import './../../Components/CSS/Animation.css'
import video from "./../../images/video.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();





const Home = () => {

  return (


<div>
  <div class="video_contain">
    <video autoPlay loop muted id='video'>
    <source src={video} type='video/mp4'/>
  </video>
  </div>
<div className="App">
  <div>
  
    <div className='yes'>
    <div className="hero-text">
      <h1><span className="blue">Software </span> House</h1>
        <p>Guarantee of execution of the order within <span className="blue1">30 Days, </span> otherwise money back.</p>
    </div>
    </div>

    <div className="text2" data-aos="fade-up" data-aos-delay="100">
      <a href="roxy.pl">
        <div className='buttonguton'>
        <p className='center'>Get Started </p>
        </div>
      </a>
    </div>

    <div className='pis App' data-aos="fade-up" data-aos-delay="100">
      <div className='element2'><h2>#TITLE</h2>
        <h3 className='text'>Web & Mobile Software House</h3>
          <p className='p'>Implement solutions with impact. Digitize all aspects of your business and gain the technological advantage cooperating with commerce transformation experts. 
         </p>
        <div className='features img'>Napierdalanie Responsywnych stron całymi dniami</div>
        <div className='features img'>Tworzenie błędów które pozniej naprawiamy</div>
        <div className='features img'>Robienie Exploitów w kodzie</div>
      </div>
      <div>
        <div className='logov3'></div>
      </div>
    </div>

      <div className='Po Pap' data-aos="fade-up" data-aos-delay="100">
        <div>
          <div className='noclass'></div>
        </div>
      <div>
        <div className='element2'><h2>Jebane responsywne strony</h2></div>
        <h3 className='text'>Ecommerce</h3>
        <p className='p'>We build online stores that are limited only by your imagination. We optimize them in terms of marketing, because each store must be able to sell. We use batch methods, and if you use these methods, we write the basics of the modules as needed. 
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className='tech colour'>
      <div data-aos="fade-up" data-aos-delay="200">
        <div>
          <h3 className='collumns'>What Technologies we use to programming pages</h3>
        </div>
        <div>
          <p className='margin center'>We use the best technologes to programming pages there is some examples </p>
        </div>
      </div>
        <ul className='list'>
          <li>
             <a href="/" class="clip-each clip-gradient " >
				      <div class="clip-caption"></div>
			       </a>
             <a href="/">
              <h3 className='center2' >React.JS</h3>
              </a>
              <h5>1</h5>
          </li>
          <li>
            <a href="/" class="clip-each clip-gradient">
				      <div class="clip-caption"></div>
			      </a>
            <a href="/">
              <h3 className='center2'>React.JS</h3>
              </a>
          </li>
          <li >
            <a href="/" class="clip-each clip-gradient react ">
				      <div class="clip-caption"></div>
			      </a>
            <a href="/">
              <h3 className='center2'>React.JS</h3>
              </a>
          </li>
        </ul>
        
        
        <svg class="clip-svg">
			<defs>
				<clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
					<polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
				</clipPath>
			</defs>
		</svg>	
      </div>

      
      <div className='contactus'> 
        <div className='contactus-info' data-aos="fade-up" data-aos-delay="200">
        <div>
          <h3>Are you intrested in work with JarlTeam?</h3>
        </div>
        <div>
        <p className='short-title'>We are looking to work with people that are serious about the programming, marketing partners, and those who wish to promote our company around the world.</p>
        </div>

        </div>
       <div  className='buttoncontact'data-aos="fade-up" data-aos-delay="200">
       <button class="btn gradient ">Contact Us</button>
      


      
        </div>
    </div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    <div><h1>xd</h1></div><div><h1>xd</h1></div>
    <div><h1>xd</h1></div>
    
</div>
  )
}
export default Home;