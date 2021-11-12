import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.ratings = parseFloat(data.ratings);
    console.log(data);
    reset();
  }

  return (
    <div className="addproducts-page">
      <div className="addproducts-page-wrapper">
        <Container>
          <h3 className="section-title">Give a Review</h3>
          <Row>
            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" type="text" placeholder="Your name" {...register("name")} />
                <input className="input-field" type="email" placeholder="Email" {...register("email")} />
                <input className="input-field" type="text" placeholder="designation" {...register("designation")} />
                <input className="input-field" type="text" placeholder="Location" {...register("location")} />
                <input className="input-field" type="number" placeholder="Ratings" {...register("ratings", { min: 0, max: 5 })} />
                <input className="input-field" type="text" placeholder="Image url" {...register("img")} />
                <textarea rows="4" {...register("comment")} placeholder="Enter comment" />
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

export default ReviewForm;