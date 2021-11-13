import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const result = await axios('https://ancient-dawn-23437.herokuapp.com/products');
      setProducts(result.data);
    }

    loadProducts().catch(console.dir);
  }, []);

  return (
    <div className="products-area">
      <div className="products-area-wrapper">
        <Container>
          <h3 className="section-title">FEATURED PRODUCTS</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {
              products.slice(0, 6).map(product => <Product key={product._id} product={product} />)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;