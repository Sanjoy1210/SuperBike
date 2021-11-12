import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Product.css';

const Product = ({ product }) => {
  const { title, description, img, price, ratings } = product;

  return (
    <Col className="single-product">
      <Card>
        <div className="hearts">
          <i className="fas fa-heart"></i>
        </div>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Rating
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={ratings}
            readonly
          />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.slice(0, 100)}
          </Card.Text>
          <h4 className="price py-2">
            $ {price}
          </h4>

          <div className="fancy-button">
            <Button className="expand-btn">
              <span>Buy now</span>
              <i className="fas fa-arrow-right"></i>
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;