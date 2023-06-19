import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import { CDBBtn, CDBContainer } from "cdbreact";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import SalesList from '../Components/SalesList';

const ReportSummary = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <h2>Sales Report Summary</h2>
          </Col>
        </Row>
          
      <div className='content no-padding'>
        <SalesList/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default ReportSummary