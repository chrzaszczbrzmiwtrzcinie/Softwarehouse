import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../Components/CSS/Faq.css'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Faq() {
  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const person1 = [];
  for (let i = 0; i < 1; i += 1) {
    person1.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black none'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>1</h2></div>
          <div className='image-name1'>
        </div>
         <div>
            <h2>Adam Miknik</h2>
            <h2 className='lightblue'>Frontend Developer</h2>
            <p>A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times.</p>
          </div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  } 
  const person2 = [];
  for (let i = 0; i < 1; i += 1) {
    person2.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
         <div className='black'>
          <div className='latdoswiadczenia30'>
            <div className='workernumber'><h2 className='numberofperson'>2</h2></div>
          <div className='image-name1'>
        </div>
        <div><h2 className=''>Agata Miknik</h2><h2 className='lightblue'>CEO & Sponsor</h2><p>The Chief Executive Officer (CEO) is the highest-ranking executive of any company. They are responsible for ensuring that the business operates at a profit and meets its goals.</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const person3 = [];
  for (let i = 0; i < 1; i += 1) {
    person3.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>3</h2></div>
          <div className='image-name1'>
        </div>
        <div><h2 className=''>Krzysztof Paliga</h2><h2 className='lightblue'>Backend Developer</h2><p>Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const person4 = [];
  for (let i = 0; i < 1; i += 1) {
    person4.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>4</h2></div>
          <div className='image-name1'>
        </div>
        <div><h2 className=''>Natalia Miknik</h2><h2 className='lightblue'>Graphic Designer</h2><p>Graphic designers create visual communications such as adverts, branding, publicity materials and magazine layouts. Graphic designers (who may also be known as graphic artists) utilise graphic design skills to create media products such as magazines, labels, advertising and signage</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const person5 = [];
  for (let i = 0; i < 1; i += 1) {
    person5.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>5</h2></div>
          <div className='image-name1'>
        </div>
        <div><h2 className=''>Jarl Szakal</h2><h2 className='lightblue'>Developer</h2><p>Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems.</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const person6 = [];
  for (let i = 0; i < 1; i += 1) {
    person6.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>6</h2></div>
          <div className='image-name1'>
        </div>
        <div><h2 className=''>Jakub Szymkowiak</h2><h2 className='lightblue'>UI/UX Designer</h2><p>Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows.</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const person7 = [];
  for (let i = 0; i < 1; i += 1) {
    person7.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='latdoswiadczenia30'>
          <div className='workernumber'><h2 className='numberofperson'>7</h2></div>
          <div className='image-name1'>
        </div>
          <div><h2 className=''>Jarosław Kaczyński</h2><h2 className='lightblue'>Marketing Director</h2><p>A Marketing Director is a professional who is in charge of managing all aspects related to the production and implementation of any given campaign.</p></div>
          <div className='effect'>
            <div className='backgroundeffect1'></div>
            <div className='backgroundeffect2'></div>
          </div>
          <div className='socialinks'>
          <div className='linkedinbutton'></div>
         </div>
         </div>
        </div>
      </SwiperSlide>
    );
  }



  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {person1}
        {person2}
        {person3}
        {person4}
        {person5}
        {person6}
        {person7}
      </Swiper>
    </React.Fragment>
  );
}

export default Faq;