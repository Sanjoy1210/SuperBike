import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ review }) => {
  const { name, img, location, designation, comment, ratings } = review;
  return (
    <Col xs={12} md={6} lg={4} className="single-review">
      <div className="card" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 customer-img">
            <img src={img} className="w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={ratings}
                readonly
              />
              <p className="card-text review-content">{comment.slice(0, 100)}</p>
              <h5 className="card-title customer-name">{name}</h5>
              <p className="card-text customer-role"><small className="text-muted">{designation}, {location}</small></p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Review;

// d-md-flex bg-light rounded p-4 md-p-0
// pt-4 md-p-3 text-center md-text-left space-y-4