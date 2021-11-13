import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const user = { email: data.email };
    fetch('https://ancient-dawn-23437.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
          alert('Made Admin successfully');
        }
      });
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
                <input className="submit-btn" type="submit" value="Make admin" />
              </form>
              {success && <p>Made Admin successfully</p>}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MakeAdmin;