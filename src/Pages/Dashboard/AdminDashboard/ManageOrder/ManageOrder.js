import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './ManageOrder.css';

const ManageOrder = ({ order, handleRemoverOrder, updateOrderStatus }) => {
  const { title, name, img, price, status, _id, phone, address } = order;
  return (
    <Col sm={12} md={12} lg={12}>
      <div className="all-orders">
        <div className="order-img">
          <img src={img} alt="" />
          <h5>{title}</h5>
          <span className={status === "pending" ? "pending" : "shipped"}><p>{status}</p></span>
        </div>
        <div className="info">
          <p>{name}</p>
          <p>{phone}</p>
          <p>${price}</p>
          <p>{address}</p>
        </div>
        <div className="buttons">
          <Button onClick={() => handleRemoverOrder(_id)} variant="warning">Cancel</Button>{' '}
          <Button onClick={() => updateOrderStatus(_id)} variant="success">Update</Button>{' '}
        </div>
      </div>
    </Col>
  );
};

export default ManageOrder;