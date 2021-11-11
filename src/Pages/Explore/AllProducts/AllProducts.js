import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';

import './AllProducts.css';

const AllProducts = () => {
  return (
    <>
      <Navigation />
      <div className="allproduct-page position-relative">
        <div className="allproduct-page-wrapper">
          <Container>
            <h3 className="section-title">Explore our all products</h3>
            <Row>
              <Col md={3}>
                <h1>side bar</h1>
              </Col>
              <Col md={9}>
                <SingleProduct />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;