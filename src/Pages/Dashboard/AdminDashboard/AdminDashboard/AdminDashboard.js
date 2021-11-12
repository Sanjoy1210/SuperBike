import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const AdminDashboard = () => {
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
                <Nav.Link as={Link} to={`${url}/addProducts`}>Add Products</Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageOrders`}>Manage Orders</Nav.Link>
                <Button className="login-btn" onClick={logOut}>Log out</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <AdminRoute exact path={`${path}`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute exact path={`${path}/addProducts`}>
            <AddProducts />
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
        </Switch>
      </Container>
    </>
  );
};

export default AdminDashboard;