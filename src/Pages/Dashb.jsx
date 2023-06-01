import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';

const Dashb = () => {
  return (
    <>
    <div>
      <TopNavBar/>
      
    </div>
    <Container fluid>
    <Row>
      <Col sm={3} style={{padding:0}}>
      <Sidebar1/>
      </Col>
      <Col sm={9}style={{padding:0}}>
      <div className='content'>
        nipo hapa
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Dashb