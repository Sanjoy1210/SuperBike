import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/loader/401-1.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-wrapper">
        <Container className="text-center">
          <div className="not-found-img">
            <img src={notFound} alt="" />
          </div>
          <Link to="/home">
            <Button className="not-found-btn">Go to Home</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;