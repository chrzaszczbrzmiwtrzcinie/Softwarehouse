import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../Components/CSS/Faq.css'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Faq() {
  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const gowno = [];
  for (let i = 0; i < 1; i += 1) {
    gowno.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black none'>
          <div className='fristcard none'>
          <h1>chuj</h1>
         </div>
        </div>
      </SwiperSlide>
    );
  } 
  const dzialaj = [];
  for (let i = 0; i < 1; i += 1) {
    dzialaj.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
         <div className='black'>
          <div className='fristcard'>
          <h1>chuj</h1>
         </div>
        </div>
      </SwiperSlide>
    );
  }
  const jebac = [];
  for (let i = 0; i < 1; i += 1) {
    jebac.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <div className='black'>
          <div className='fristcard'>
          <h1>chuj</h1>
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
        {gowno}
        {dzialaj}
        {jebac}
      </Swiper>
    </React.Fragment>
  );
}

export default Faq;