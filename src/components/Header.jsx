import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">전체보기</Nav.Link>
            <Nav.Link href="#pricing">선물세트</Nav.Link>
            <NavDropdown title="커뮤니티" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                레시피
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">문의사항</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                회사소개
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">장바구니</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}



export default Header;
