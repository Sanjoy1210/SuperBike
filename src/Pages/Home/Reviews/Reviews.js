import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import customer from '../../../images/customer-1.jpg';

const Reviews = () => {
  return (
    <div className="reviews-section py-5">
      <div className="reviews-section-wrapper">
        <Container>
          <h3 className="section-title">What our customers say</h3>
          <Row>
            <Review />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;