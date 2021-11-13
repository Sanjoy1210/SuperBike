import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import fun from '../../../images/fun.jpg';

const SingleNews = ({ blog }) => {
  const { title, img, description } = blog;

  return (
    <Col className="single-news">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.slice(0, 150)}
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