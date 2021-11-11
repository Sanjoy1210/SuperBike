import React from 'react';
import { Col } from 'react-bootstrap';
import customer from '../../../images/customer-1.jpg';
import './Review.css';

const Review = ({ idn }) => {
  return (
    <Col xs={12} md={6} lg={4} className="single-review">
      <div className="card" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 customer-img">
            <img src={customer} className="w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text review-content">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h5 className="card-title customer-name">Card title</h5>
              <p className="card-text customer-role"><small className="text-muted">Web Developer, USA</small></p>
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