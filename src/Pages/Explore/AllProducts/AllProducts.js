import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';

import './AllProducts.css';

const AllProducts = () => {

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {

    const loadAllProducts = async () => {
      const result = await axios('http://localhost:5000/products');
      setAllProducts(result.data);
    }
    loadAllProducts().catch(console.dir);

  }, []);


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
                {
                  allProducts.map(product => <SingleProduct key={product._id} product={product} />)
                }
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