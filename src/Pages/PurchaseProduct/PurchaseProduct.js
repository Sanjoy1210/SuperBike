import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './PurchaseProduct.css';
import Rating from 'react-rating';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';

const PurchaseProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const loadPrdouct = async () => {
      const result = await axios(`https://ancient-dawn-23437.herokuapp.com/product/${id}`);
      setProduct(result.data);
    }
    loadPrdouct().catch(console.dir);
  }, [id]);

  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = async (data) => {
    data.status = 'pending';
    data.img = product?.img;
    data.price = parseFloat(data?.price);

    const result = await axios.post('https://ancient-dawn-23437.herokuapp.com/orders', data);
    console.log(result);
    if (result.data.insertedId) {
      alert('Order successfully completed');
      reset();
    }
  }

  console.log(watch("example"));

  return (
    <>
      <Navigation />
      <div className="purchase-page">
        <div className="purchase-page-wrapper">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="purchase-product-img">
                  <img className="w-100" src={product?.img} alt="" />
                </div>
                <div className="purchase-product-gallery">
                  <Row className="align-items-end">
                    <Col xs={12} lg={6}>
                      <img className="w-100" src={product?.gallery?.[0]} alt="" />
                    </Col>
                    <Col xs={12} lg={6}>
                      <img className="w-100" src={product?.gallery?.[1]} alt="" />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="purchase-product-details">
                  <div className="purchase-product-title">
                    <h4>{product?.title}</h4>
                  </div>
                  <div className="purchase-product-ratings">
                    <Rating
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      initialRating={product?.ratings}
                      readonly
                    />
                    <p>PLEASE HURRY, ONLY 20 In Stock</p>
                  </div>
                  <div className="purchase-product-price">
                    <span>${product?.price}</span>
                  </div>
                  <div className="purchase-product-description">
                    <p>{product?.description}</p>
                  </div>
                  <div className="purchase-product-quantity">
                    <input type="number" placeholder={1} max={100} min={1} />
                    <input type="button" value="Add to Cart" className="ms-3 btn-color" />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <div className="purchase-now-area">
                <h3 className="section-title">Purchase now</h3>
              </div>
              <Col>
                <div className="purchase-now-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={user?.displayName} {...register("name")} />
                    <input defaultValue={user?.email} {...register("email")} />
                    <input defaultValue={product?.title} {...register("title")} />
                    <input defaultValue={product?.price} {...register("price")} />
                    <input placeholder="Enter your address" {...register("address")} />
                    <input placeholder="Phone number" {...register("phone")} />

                    <input type="submit" value="Purchase now" className="purchase-btn" />
                  </form>
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

export default PurchaseProduct;