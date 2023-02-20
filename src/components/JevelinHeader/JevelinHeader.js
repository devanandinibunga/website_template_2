import React from 'react';
import './JevelinHeader.scss';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BsCart} from 'react-icons/bs';
import { Badge } from 'antd';

export const JevelinHeader = () => {
 
    const PortfolioHeaderData=["Home","About Us","Layouts","Testimonals",'Partners',"Features"]
  return (
    <Navbar className="jevelin-header-container" key='lg'  expand="false" >
          <Container fluid>
            <Navbar.Brand id="top-con" href="#">
                <img src='https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/07/logo_11.png' alt='/'/>
                <Badge count={0} showZero>
                  <BsCart className='top-con-icon'/>
                </Badge>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className='jevelin-header-sidenavbar'
            >
              <Offcanvas.Header className='ms-auto' closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  {/* <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}
                  {PortfolioHeaderData.map((each,i)=>
                    <p key={i} className='jevelin-header-each-navlink'>{each}</p>
                  )}
                  <h3> Search here... </h3>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}
