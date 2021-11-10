import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;