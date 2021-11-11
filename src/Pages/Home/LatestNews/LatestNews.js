import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleNews from '../SingleNews/SingleNews';

const LatestNews = () => {
  return (
    <div className="latest-news-section">
      <div className="latest-news-section-wrapper">
        <Container>
          <h3 className="section-title">Our Latest News</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <SingleNews />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LatestNews;