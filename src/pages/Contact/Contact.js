import React from 'react'
import '../../Components/CSS/Contact.css'
import '../../Components/CSS/Faq.css'
import Accordion from 'react-bootstrap/Accordion';







const Contact = () => {
  return (
  <div className="contact" >
      <div className="container">
       <div className='contact3 window'>
         <div className='info-text'>
           <div className='element2'><h2 className='lightblue'>CONTACT US</h2>
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
 <div className='selection-faq container'>
  <div className='containerdofaq'>
    <div className='margin'>
    <h2 className='lightblue'>FAQ</h2>
    <h3>Need help with anything?</h3>
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Czy wykonywał Pan/Pani ten rodzaj pracy?</Accordion.Header>
        <Accordion.Body>
        A. Tak, wykonywałem taką lub podobną pracę. Jeżeli masz doświadczenie w wykonywaniu pracy, mów o niej w taki sposób, aby przekonać pracodawcę, że znasz się na tej pracy i jesteś w stanie ją wykonywać.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Dlaczego odszedł Pan/odeszła Pani z poprzedniej pracy?
      </Accordion.Header>
        <Accordion.Body>
        Wymień tylko te powody, które stawiają Cię w korzystnym świetle. Nie wspominaj o tym, że zostałeś zwolniony, pokłóciłeś się, wyrzucono Cię, itp. Jeżeli jednak któryś z tych powodów zostanie ujawniony podczas rozmowy, zapewnij pracodawcę, że podobny problem na pewno nie będzie miał miejsca w pracy, o którą się starasz.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dlaczego powinniśmy zatrudnić Pana/Panią a nie kogoś innego?
      </Accordion.Header>
        <Accordion.Body>
        A. Udziel szybkiej odpowiedzi - jeśli Ty sam sprawisz wrażenie, że nie wiesz, dlaczego powinieneś dostać tę pracę, nie sądź, że będzie to wiedział Twój rozmówca.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Czy wykonywał Pan/Pani ten rodzaj pracy?</Accordion.Header>
        <Accordion.Body>
        A. Tak, wykonywałem taką lub podobną pracę. Jeżeli masz doświadczenie w wykonywaniu pracy, mów o niej w taki sposób, aby przekonać pracodawcę, że znasz się na tej pracy i jesteś w stanie ją wykonywać.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Czy wykonywał Pan/Pani ten rodzaj pracy?</Accordion.Header>
        <Accordion.Body>
        A. Tak, wykonywałem taką lub podobną pracę. Jeżeli masz doświadczenie w wykonywaniu pracy, mów o niej w taki sposób, aby przekonać pracodawcę, że znasz się na tej pracy i jesteś w stanie ją wykonywać.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Czy wykonywał Pan/Pani ten rodzaj pracy?</Accordion.Header>
        <Accordion.Body>
        A. Tak, wykonywałem taką lub podobną pracę. Jeżeli masz doświadczenie w wykonywaniu pracy, mów o niej w taki sposób, aby przekonać pracodawcę, że znasz się na tej pracy i jesteś w stanie ją wykonywać.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  </div>
 </div>
 </div>
  )
}
export default Contact;