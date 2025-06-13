import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
   return (
      <Container className='bannerC'>
  <Row className="Banner">
  <Col className="imgbox" sm={6}>
    <img
      src={process.env.PUBLIC_URL + '/img/istockphoto-926774114-1024x1024.jpg'}
      alt="매운불고기"
    />
  </Col>

  <Col className="txtbox" sm={6}>
    <h5>3+1 프로모션</h5>
    <h4>불고기의 끝을 경험하라<br />도전해볼텐가?</h4>
    <h3>세매붉</h3>
   <button onClick={() => alert('장바구니에 담았습니다!')}>
  장바구니 담기
</button>
  </Col>
</Row></Container>
   )
}

export default Banner