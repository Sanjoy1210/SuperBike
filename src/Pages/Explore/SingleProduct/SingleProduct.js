import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
  const { title, img, price, description, ratings, reviews, _id } = product;
  return (
    <Row className="mb-4">
      <Col xs={12} md={12} lg={4}>
        <div className="single-product-img">
          <img className="w-100" src={img} alt="" />
        </div>
      </Col>
      <Col xs={12} md={12} lg={8}>
        <div className="product-details">
          <h3>{title}</h3>
        </div>
        <div className="product-review">
          <div className="ratings">
            <Rating
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={ratings}
              readonly
            />
          </div>
          <div className="review-count">
            <p>{reviews} Reviews</p>
          </div>
        </div>
        <div className="price">
          <span>$ {price}</span>
        </div>
        <div className="product-description">
          <p>{description.slice(0, 300)}</p>
        </div>
        <div className="purchase-btn">
          <Button as={Link} to={`/purchaseProduct/${_id}`} className="buy-now-btn">Buy now</Button>
        </div>
      </Col>
    </Row>
  );
};

export default SingleProduct;