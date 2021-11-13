import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleNews from '../SingleNews/SingleNews';
import axios from 'axios';
import './LatestNews.css';

const LatestNews = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const result = await axios('https://ancient-dawn-23437.herokuapp.com/blogs');
      setBlogs(result.data);
    }
    loadBlogs().catch(console.dir);
  }, [])

  return (
    <div className="latest-news-section">
      <div className="latest-news-section-wrapper">
        <Container>
          <h3 className="section-title">Our Latest News</h3>
          <Row xs={1} md={2} lg={4} className="g-4">
            {
              blogs.map(blog => <SingleNews key={blog._id} blog={blog} />)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LatestNews;