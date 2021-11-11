import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import product from '../../../images/products/cycle-40.jpg';
import './SingleProduct.css';

const SingleProduct = () => {
  return (
    <Row>
      <Col xs={12} md={12} lg={4}>
        <div className="single-product-img">
          <img className="w-100" src={product} alt="" />
        </div>
      </Col>
      <Col xs={12} md={12} lg={8}>
        <div className="product-details">
          <h3>Mondraker Dune R 27.5</h3>
        </div>
        <div className="product-review">
          <div className="ratings">
            <Rating
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={3.5}
              readonly
            />
          </div>
          <div className="review-count">
            <p>15 Reviews</p>
          </div>
        </div>
        <div className="price">
          <span>$ 299</span>
        </div>
        <div className="product-description">
          <p>The Mondraker Dune R 27.5 Mountain Bike 2019 features a freshly updated Stealth alloy frame complete with brand-new rear triangle, a new alloy monoblock upperlink, a removeable rear shock fender and larger pivot axles and bearings ensuring further strength and durability. Now with even more travel.</p>
        </div>
        <div className="purchase-btn">
          <Button className="buy-now-btn">Buy now</Button>
        </div>
      </Col>
    </Row>
  );
};

export default SingleProduct;