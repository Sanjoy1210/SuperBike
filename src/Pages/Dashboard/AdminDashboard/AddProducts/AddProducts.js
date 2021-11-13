import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.reviews = 20;
    data.gallery = [data.img, data.img];

    const addProduct = async () => {
      const result = await axios.post('https://ancient-dawn-23437.herokuapp.com/addProducts', data);
      console.log(result);
      if (result.data.insertedId) {
        alert('Products added successfully');
        reset();
      }
    }

    addProduct().catch(console.dir);
  }

  return (
    <div className="addproducts-page">
      <div className="addproducts-page-wrapper">
        <Container>
          <h3 className="section-title">Add Products</h3>
          <Row>
            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" type="text" placeholder="Product Title" {...register("title")} />
                <textarea rows="4" {...register("description")} placeholder="Enter Description" />
                <input className="input-field" type="text" placeholder="Price" {...register("price")} />
                <input className="input-field" type="text" placeholder="Ratings" {...register("ratings")} />
                <input className="input-field" type="text" placeholder="Image url" {...register("img")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="submit-btn" type="submit" value="Add Product" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AddProducts;