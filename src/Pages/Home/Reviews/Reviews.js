import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    const loadReviews = async () => {
      const result = await axios('http://localhost:5000/reviews');
      setReviews(result.data);
    }

    loadReviews().catch(console.dir);

  }, [])

  return (
    <div className="reviews-section py-5">
      <div className="reviews-section-wrapper">
        <Container>
          <h3 className="section-title">What our customers say</h3>
          <Row>
            {
              reviews.map(review => <Review key={review._id} review={review} />)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;