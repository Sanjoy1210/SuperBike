import React from 'react';
import { Col } from 'react-bootstrap';
import customer from '../../../images/customer-1.jpg';
import './Review.css';

const Review = ({ idn }) => {
  return (
    <Col xs={12} md={6} lg={4} className="single-review">
      <div class="card" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4 customer-img">
            <img src={customer} class="w-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text review-content">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h5 class="card-title customer-name">Card title</h5>
              <p class="card-text customer-role"><small class="text-muted">Web Developer, USA</small></p>
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