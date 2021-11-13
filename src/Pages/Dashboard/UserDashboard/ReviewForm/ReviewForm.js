import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './ReviewForm.css';
import useAuth from '../../../../hooks/useAuth';

const ReviewForm = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.ratings = parseFloat(data.ratings);
    console.log(data);

    const addReview = async () => {
      const result = await axios.post('https://ancient-dawn-23437.herokuapp.com/addReview', data);
      if (result.data.insertedId) {
        alert('Review added successfully');
        reset();
      }
    }

    addReview().catch(console.dir);
  }

  return (
    <div className="addproducts-page">
      <div className="addproducts-page-wrapper">
        <Container>
          <h3 className="section-title">Give a Review</h3>
          <Row>
            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" type="text" defaultValue={user.displayName} {...register("name")} />
                <input className="input-field" type="email" defaultValue={user.email} {...register("email")} />
                <input className="input-field" type="text" placeholder="designation" {...register("designation")} />
                <input className="input-field" type="text" placeholder="Location" {...register("location")} />
                <input className="input-field" type="number" placeholder="Ratings" {...register("ratings", { min: 0, max: 5 })} />
                <input className="input-field" type="text" placeholder="Image url" {...register("img")} />
                <textarea rows="4" {...register("comment")} placeholder="Enter comment" />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="add-review-btn" type="submit" value="Add Review" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReviewForm;