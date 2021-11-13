import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css';

const ManageOrders = () => {

  const [allOrders, setAllOrders] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const loadAllBooking = async () => {
      const result = await axios('http://localhost:5000/allOrders');
      setAllOrders(result.data);
    }

    loadAllBooking().catch(console.dir);
  }, [isUpdate])

  useEffect(() => {
    if (allOrders.length) {
      const a = allOrders.filter(order => order.status == 'pending');
      setPending(a.length);
    }
  }, [allOrders]);

  const handleRemoverOrder = async (id) => {
    const processed = window.confirm('are you sure, you want to delete?');
    if (processed) {
      const result = await axios.delete(`http://localhost:5000/orders/${id}`);
      if (result.data.deletedCount) {
        alert('deleted successfully');
      }
      const newOrders = allOrders.filter(order => order._id !== id);
      setAllOrders(newOrders);
    }
  }

  const updateOrderStatus = async (id) => {
    const updateOrder = allOrders.find(order => order._id == id);

    updateOrder.status = 'shipped';
    const result = await axios.put(`http://localhost:5000/order/${id}`, updateOrder);

    if (result.data.modifiedCount) {
      setIsUpdate(true);
    }
  }

  return (
    <div className="manage-orders">
      <div className="manage-orders-wrapper">
        <Container>
          <div className="manage-orders-status">
            <Row xs={1} md={3} lg={3} className="g-4">
              <Col>
                <div className="total-orders bg-danger p-4 text-center">
                  <h3 className="text-white">Total Orders</h3>
                  <h1 className="text-white">{allOrders.length}</h1>
                </div>
              </Col>
              <Col>
                <div className="pending-orders bg-success p-4 text-center">
                  <h3 className="text-white">Pending Orders</h3>
                  <h1 className="text-white">{pending}</h1>
                </div>
              </Col>
              <Col>
                <div className="shipped-orders bg-warning p-4 text-center">
                  <h3 className="text-white">Shipped Orders</h3>
                  <h1 className="text-white">{allOrders.length - pending}</h1>
                </div>
              </Col>
            </Row>
          </div>

          <div className="display-allorders">
            <Row>
              {
                allOrders.map(order => <ManageOrder
                  key={order._id}
                  order={order}
                  handleRemoverOrder={handleRemoverOrder}
                  updateOrderStatus={updateOrderStatus}
                />)
              }
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ManageOrders;