import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/bike1.png';
import banner2 from '../../../images/banner/bike2.png';
import banner3 from '../../../images/banner/bike3.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-wrapper">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Love every ride</h3>
              <p>Always back your scooter into the curb and sit where you can see it. The sound of the throttle makes me fall in love with our bike.  King of the bikes </p>
              <Button className="regular-btn">Explore More</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Rides Made Batter</h3>
              <p>Believe in your cycle, and it will lead your way. The best rides happen on two wheels. Ride it like a pro it’s not just riding, it’s a feeling. Ride and live today.</p>
              <Button className="regular-btn">Explore More</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>A pollution free ride</h3>
              <p>You can’t be happier, if you won’t ride your bike. A long, long ride in your bike will clear your mind. And the cycle can sing on the streets of a city.</p>
              <Button className="regular-btn">Explore More</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;