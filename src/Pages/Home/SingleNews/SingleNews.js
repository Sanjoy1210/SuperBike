import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import fun from '../../../images/fun.jpg';

const SingleNews = () => {
  return (
    <Col className="single-news">
      <Card>
        <Card.Img variant="top" src={fun} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <div className="fancy-button">
            <Button className="expand-btn">
              <span>Read More</span>
              <i className="fas fa-arrow-right"></i>
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleNews;