import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo3.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <div>
                <div>
                  <img src={logo} alt="" style={{ width: "60px" }} />
                  <h4>SuperBike</h4>
                </div>
                <p>If you are looking for the smoothest way to reach the top speed & cruise in front of your competitors, you’re in the right place. Welcome to SuperBike.</p>
              </div>
            </Col>
            <Col xs={12} md={5} lg={3} className="offset-md-1 offset-lg-0">
              <div className="office-location">
                <h4>OFFICE IN NEW YORK</h4>
                <p><i className="fas fa-map-marker-alt"></i> 7398 Colonial Rd, Brooklyn <br /> 242 Wythe Ave #4, Brooklyn </p>
                <p><i className="fas fa-phone-alt"></i> + (123) 124-567-8901 <br /> + (123) 124-567-8901 </p>
                <p><i className="far fa-envelope"></i> super@bike.com <br /> career@superbike.com </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <div className="others-page">
                <h4>OTHERS PAGE</h4>
                <div className="links">
                  <Link to="/">Privacy & Policy</Link>
                  <Link to="/">Terms of Use</Link>
                  <Link to="/">Disclaimer</Link>
                  <Link to="/">FAQ</Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={5} lg={2} className="offset-md-1 offset-lg-0">
              <div className="our-story">
                <h4>OUR STORY</h4>
                <div className="links">
                  <Link to="/">History</Link>
                  <Link to="/">Products</Link>
                  <Link to="/">Blogs</Link>
                  <Link to="/">Press Release</Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <div className="socail-links">
                <h4>FOLLOW US</h4>
                <div className="icons">
                  <span className="linkedin"><i className="fab fa-linkedin-in"></i></span>
                  <span className="twitter"><i className="fab fa-twitter"></i></span>
                  <span className="instagram"><i className="fab fa-instagram"></i></span>
                  <span className="youtube"><i className="fab fa-youtube"></i></span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copyright-content text-center">
          <p className="copyright-text">&copy; 2021 SuperBike Company, All Rights Reserved. Developed By SuperBike</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;