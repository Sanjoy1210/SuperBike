import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import googleIcon from '../../../images/logo/google.png';

const Register = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.displayName = data.firstName + ' ' + data.lastName;
    console.log(data);
    reset();
  }
  console.log(watch("example"));

  return (
    <>
      <Navigation />
      <div className="login-page">
        <div className="login-page-wrapper">
          <Container>
            <h3 className="section-title">Create an account</h3>
            <Row>
              <Col>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="input-field" type="text" placeholder="First name" {...register("firstName")} />
                  <input className="input-field" type="text" placeholder="Last name" {...register("lastName")} />
                  <input className="input-field" type="email" placeholder="Email Address" {...register("email")} />
                  <input className="input-field" type="password" placeholder="Password" {...register("password", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}

                  <p className="login-text">Already have an account? <Link to="/login">Login here</Link></p>
                  <input className="submit-btn" type="submit" value="Register" />
                </form>

                <div className="signin-authoraization">
                  <p>or Login using </p>
                  <div className="signin-buttons">
                    <Button className="signin-btn">
                      <img src={googleIcon} alt="" />
                      <span>Continue with Google</span>
                    </Button>{' '}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;