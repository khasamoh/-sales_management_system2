import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CDBCard, CDBCardBody, CDBCardTitle, CDBCardText, CDBIcon, CDBContainer } from "cdbreact";
import TodaySalesList from '../Components/TodaySalesList'
import UserCount from '../Components/UserCount'
import ProductCount from '../Components/ProductCount'
import CustomerCount from '../Components/CustomerCount'

const Dashb = () => {
 
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
          <Col sm={4}>
          <div className='btn btn-warning card'>
            <NavLink exact to="/user" style={{color:"#333",textDecoration:'none'}} activeClassName="activeClicked">
              <h3>Total Users</h3>
              <UserCount/>
            </NavLink>
          </div>
          </Col>
          <Col sm={4} >
          <div className='btn btn-info card'>
            <NavLink exact to="/product" style={{color:"#333",textDecoration:'none'}} activeClassName="activeClicked">
              <h3>Total Products</h3>
              <ProductCount/>
            </NavLink>
          </div>
          </Col>
          <Col sm={4} >
          <div className='btn btn-success card'>
            
            <NavLink exact to="/customer" style={{color:"#333",textDecoration:'none'}} activeClassName="activeClicked">
              <h3>Total Customers</h3>
              <CustomerCount/>
            </NavLink>
          </div>
          </Col>
        </Row>
        <hr/>
        <Row className='listhead'>
          <Col sm={8}>
          <div className='card2'>
            <h3>Today Sales</h3>
            <hr/>
            <TodaySalesList/>
          </div>
          </Col>
          <Col sm={4} >
          <div className='card2'>
            <h3>Low Stock Level </h3>
            <hr/>
            <ul>
              <li>T-Shirt</li>
              <li>Tablera</li>
              <li>Soup</li>
              <li>Hagam</li>
              <li>Sapralo</li>
            </ul>
          </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Dashb