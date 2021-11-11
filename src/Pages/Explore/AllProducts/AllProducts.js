import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AllProducts = () => {
  return (
    <>
      <Navigation />
      <div className="allproduct-page position-relative">
        <div className="allproduct-page-wrapper">
          <Container>
            <h2>This is All Products</h2>

          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;