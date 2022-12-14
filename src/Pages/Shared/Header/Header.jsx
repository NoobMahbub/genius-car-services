import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../../../Components/CustomLink/CustomLink';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    auth.signOut();
    navigate('/login');
  };
  
    return (
        <>
     <Navbar collapseOnSelect expand="lg" style={{background: "#202c45"}} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="https://raw.githubusercontent.com/ProgrammingHero1/batch5-genius-car-service-module-60/main/src/images/logo.png" height={30} alt="" srcSet="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='current' href="#services">Services
            </Nav.Link>

            <Nav.Link className='current' href="#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='current' as={Link} to = "/about">About</Nav.Link>
           {
            user && <>
            <Nav.Link as={Link} to = "/addservice">Add</Nav.Link>
            <Nav.Link as={Link} to = "/manage">Manage</Nav.Link>
           
           </>
           }
           {
            user ?
           <button onClick={handleSignOut}>Sign Out</button> :
            <Nav.Link className='current' eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



        </>
    );
};

export default Header;