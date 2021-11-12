import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';
import MyOders from '../MyOrders/MyOders';
import Payment from '../Payment/Payment';
import ReviewForm from '../ReviewForm/ReviewForm';
import './UserDashboard.css';

const UserDashboard = () => {
  const { logOut } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container className="dashboard">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">SuperBike.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content flex-grow-1 pe-3">
                <Nav.Link as={Link} to={`${url}`}></Nav.Link>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
                <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                <Nav.Link as={Link} to={`${url}/reviewForm`}>Review</Nav.Link>
                <Button className="login-btn" onClick={logOut}>Log out</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <Route exact path={`${path}`}>
            <MyOders />
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOders />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route exact path={`${path}/reviewForm`}>
            <ReviewForm />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default UserDashboard;