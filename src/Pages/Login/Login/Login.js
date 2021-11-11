import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import googleIcon from '../../../images/logo/google.png';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, loginUser } = useAuth();

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    loginUser(data.email, data.password);
    reset();
  }

  console.log(watch("example"));
  return (
    <>
      <Navigation />
      <div className="login-page">
        <div className="login-page-wrapper">
          <Container>
            <h3 className="section-title">Login Here</h3>
            <Row>
              <Col>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="input-field" type="email" placeholder="Email Address" {...register("email")} />
                  <input className="input-field" type="password" placeholder="Password" {...register("password", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}

                  <p className="login-text">Don't have an account? <Link to="/register">Create an account</Link></p>
                  <input className="submit-btn" type="submit" value="Login" />
                </form>

                <div className="signin-authoraization">
                  <p>or Login using </p>
                  <div className="signin-buttons">
                    <Button onClick={signInUsingGoogle} className="signin-btn">
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

export default Login;