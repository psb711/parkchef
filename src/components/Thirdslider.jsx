import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container>
      <h3>구매자후기</h3>
      <p>각자의 레시피가 담긴 박쉐프한상</p>
      <Swiper slidesPerView={'2'}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
   
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }} modules={[Pagination]} className="mySwiper3">
        <SwiperSlide>
    
          <div className="imgbox">
            <img src="process.env.PUBLIC_URL + '/img/hotbuigogicover.png'" alt="리뷰" />
          </div>
          <div className="txtbox">
           <p>정말맛있어요</p>
           
          </div> <p className='ReIn'><span>psb711</span>|
            <span>2025.06.20</span></p>
          </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <button>리뷰쓰기</button>
    </Container>
  );
}
