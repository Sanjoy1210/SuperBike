import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import bike from '../../../images/products/bike14.png';
import './Product.css';

const Product = () => {
  return (
    <Col className="single-product">
      <Card>
        <div className="hearts">
          <i className="fas fa-heart"></i>
        </div>
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Rating
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={2.5}
            readonly
          />
          <Card.Title>Giant Stance 2 27.5″</Card.Title>
          <Card.Text>
            Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus.
          </Card.Text>
          <h4 className="price py-2">
            $699
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