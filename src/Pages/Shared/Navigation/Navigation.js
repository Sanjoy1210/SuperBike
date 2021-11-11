import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo3.png';
import './Navigation.css';
import userIcon from '../../../images/user/user.png';

const Navigation = () => {

  const { user, logOut } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          SuperBike
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            {
              !user.email ? (
                <Nav.Link className="login-btn" as={Link} to="/login">Login</Nav.Link>
              ) :
                (
                  <>
                    <span className="user-name">{user?.displayName}</span>
                    <span className="profile-pic"><img src={user?.photoURL ? user?.photoURL : userIcon} alt="" /></span>
                    <Button className="login-btn" onClick={logOut}>Log out</Button>
                  </>
                )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;