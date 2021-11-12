import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
  const [manageAllProducts, setManageAllProducts] = useState([]);

  useEffect(() => {
    const loadAllProducts = async () => {
      const result = await axios('http://localhost:5000/products');
      setManageAllProducts(result.data);
    }

    loadAllProducts().catch(console.dir);
  }, []);

  const handleDeleteProduct = async (id) => {
    const processed = window.confirm('Are you sure, you want to delete?');
    if (processed) {
      const result = await axios.delete(`http://localhost:5000/products/${id}`);
      if (result.data.deletedCount) {
        alert('deleted successfully');
      }
      const newProducts = manageAllProducts.filter(product => product._id !== id);
      setManageAllProducts(newProducts);
    }
  }

  return (
    <div className="products-area">
      <div className="products-area-wrapper">
        <Container>
          <h3 className="section-title">Manage All PRODUCTS</h3>
          <Row xs={1} md={2} lg={4} className="g-4">
            {
              manageAllProducts.map(product => <ManageProduct
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ManageProducts;