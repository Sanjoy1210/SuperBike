import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import Order from '../Order/Order';

const MyOders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadOrders = async () => {
      const result = await axios(`http://localhost:5000/orders?email=${user.email}`);
      setMyOrders(result.data);
    }

    loadOrders().catch(console.dir);
  }, [user.email]);

  const handleRemoveOrder = async (id) => {
    console.log(id);
    const processed = window.confirm('are u sure u want to delete?');
    if (processed) {
      const result = await axios.delete(`http://localhost:5000/orders/${id}`);
      if (result.data.deletedCount) {
        alert('deleted successfully')
      }
      const newOrders = myOrders.filter(order => order._id !== id);
      setMyOrders(newOrders);
    }
  }

  return (
    <div className="my-orders-page">
      <div className="my-orders-page-wrapper">
        <Container>
          <Row>
            {
              myOrders.map(order => <Order
                key={order._id}
                order={order}
                handleRemoveOrder={handleRemoveOrder}
              />)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyOders;