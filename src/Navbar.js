import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '/home/hrishikeshc/Library Management System/my-app/src/index.css';
import navlogo from '/home/hrishikeshc/Library Management System/my-app/src/logo.jpg';


const Navigation= () => {
  return (
    <>
    {/* bg="dark" variant="dark" */}
      <Navbar>
        <Container>
          
            <div className='navlogo'>
          
                  <img
              src={navlogo}
              width="30"
              height="30"
              // className="d-inline-block align-top"
              alt=""
                />
                </div>
                <Navbar.Brand 
                href="#home">LMS
              </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          
            <Nav.Link href="#"> Logout</Nav.Link>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="logindisplay">
                    Signed in as: <a href="#login">Hrishiksh</a>
              </Navbar.Text>
              </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>



  )
}

export default Navigation;
