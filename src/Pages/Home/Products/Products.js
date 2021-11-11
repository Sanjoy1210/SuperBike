import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  return (
    <div className="products-area">
      <div className="products-area-wrapper">
        <Container>
          <h3 className="section-title">FEATURED PRODUCTS</h3>
          <Row xs={1} md={2} lg={4} className="g-4">
            <Product />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;