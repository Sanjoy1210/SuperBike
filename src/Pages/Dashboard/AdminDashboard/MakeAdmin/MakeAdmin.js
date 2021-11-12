import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  }

  return (
    <div className="make-admin-page">
      <div className="make-admin-page-wrapper">
        <Container>
          <h3 className="section-title">Make an Admin</h3>
          <Row>
            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" type="email" placeholder="Email Address" {...register("email")} />
                <input className="submit-btn" type="submit" value="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MakeAdmin;