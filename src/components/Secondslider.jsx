import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import Data from '../Data.jsx';


// import required modules
import { Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  const [best] = useState(Data);
  return (
   <div className="SCC">
    <Container>
      <h3>인기상품</h3>
      <p>박쉐프의 알찬 인기 구성을 소개합니다</p>
      <Swiper
        slidesPerView={'1'}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
   
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper2"
      > {best.map((product,index) =>(   <SwiperSlide key={index}>
            <div className="imgbox">
              <img src={product.imageSrc}  alt={product.altText} />
              </div>
            <div className="txtbox">
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button>상품추가</button>
              </div>
          </SwiperSlide>))}
       
      </Swiper>
    </Container>
    </div>
  );
}