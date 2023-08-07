import React, { useEffect, useState } from 'react';
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import TodaySalesList from '../Components/TodaySalesList';

const Sale = () => {
  const [products, setProduct] = useState([]);
  //insert properties
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  // const [datetime, setDatetime] = useState('');
  // const [pay_status, setSalepay_status] = useState('');
  // const [userId, setUserId] = useState('');
  // const [customerId, setCustomerId] = useState('');

  // Create a new Date object for the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
const day = currentDate.getDate();

// Format the date as needed (e.g., "YYYY-MM-DD")
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const saleData = {
      quantity: quantity,
      datetime: formattedDate,
      pay_status: 'Paid',
      user: 1,
      product: productId,
      customer: 2,
    };
console.log("nipoo");
    axios.post('http://127.0.0.1:8000/sales/create/', saleData)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });

    // Reset the form after submitting
    setQuantity('');
  };

//for dropdown in selecting product for sales
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <div>
      <TopNavBar/>
    </div>
    <Container fluid>
    <Row>
      <Col sm={2} className='no-padding'>
      <Sidebar1/>
      </Col>
      <Col sm={10} className='no-padding content1'>

        <Row className='listhead'>
          <Col sm={12} className='pad-head'>
          <h2>Make Sales</h2>
          <form onSubmit={handleSubmit} className="frm_product">
              <div className="sale_div">
                <div className="form-group mt-2 sf">
                  <label>Choose Product</label>
                  <select className="form-control mt-1" value={productId} onChange={(e) => setProductId(e.target.value)}>
                    {products.length > 0 ? (
                      products.map(product => (
                        <option value={product.pro_id}>{product.pro_name}</option>
                      ))
                      ) : (
                          <option colSpan="5">No data available</option>
                        )
                      }
                  </select>
                </div>
                <div className="form-group mt-2 sf">
                  <label>Quantity</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quantity"
                    required
                  />
                   
                </div>
                <div className="form-group mt-2 sf">
                <button type="submit" className="btn btn-primary" style={{width:100,}}>
                    Sale
                  </button>
                </div>
              </div>
            </form>
            <hr/>
            <h2>Today Sales</h2>
          </Col>
        </Row>
      <div className='content no-padding'>
        <TodaySalesList/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Sale