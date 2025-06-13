import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide   style={{
    backgroundImage: "url(/img/miansliderback1.png)",
    backgroundColor:  "white"

  }}>       
        
           <Container>
            <div className="txtbox">
            <h3>집에서 즐기는 고급정찬</h3>
            <p>박쉐프가 건강하고 정성스럽게 준비</p>
            <button> 사러가기</button>
            </div>
          </Container>
       </SwiperSlide>
       
     <SwiperSlide   style={{
    backgroundImage: "url(/img/miansliderback2.png)",
    backgroundColor:  "white"

  }}>       
        
           <Container>
            <div className="txtbox">
            <h3>세상에서 가장 매운 소불고기</h3>
            <p>맛있게맵다</p>
            <button> 사러가기</button>
            </div>
          </Container>
       </SwiperSlide>
         <SwiperSlide   style={{
    backgroundImage: "url(/img/miansliderback1.png)",
    backgroundColor:  "white"

  }}>       
        
           <Container>
            <div className="txtbox">
            <h3>집에서 즐기는 고급정찬</h3>
            <p>박쉐프가 건강하고 정성스럽게 준비</p>
            <button> 사러가기</button>
            </div>
          </Container>
       </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url(/img/miansliderback1.png)"}}>       
        
           <Container>
            <div className="txtbox">
            <h3>집에서 즐기는 고급정찬</h3>
            <p>박쉐프가 건강하고 정성스럽게 준비</p>
            <button> 사러가기</button>
            </div>
          </Container>
       </SwiperSlide>
      </Swiper>
    </>
  );
}
