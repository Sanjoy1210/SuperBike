import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './Order.css';

const Order = ({ order, handleRemoveOrder }) => {
  const { title, name, price, img, status, _id } = order;
  return (
    <Col sm={12}>
      <div className="single-order">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <span className="user-name">{name}</span>
        <span className={status === "pending" ? "pending" : "shipped"}><p>{status}</p></span>
        <span className="order-price">${price}</span>
        <Button onClick={() => handleRemoveOrder(_id)} variant="warning">Cancel</Button>{' '}
      </div>
    </Col>
  );
};

export default Order;