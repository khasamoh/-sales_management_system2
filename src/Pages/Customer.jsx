import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import Dtable from '../Components/Dtable';
import { CDBBtn, CDBContainer } from "cdbreact";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';


const Customer = () => {
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
      <Col sm={3} style={{padding:0}}>
      <Sidebar1/>
      </Col>
      <Col sm={9}style={{padding:0}}>
        <Row className='listhead'>
          <Col sm={10}>
          <h2>List Of Customer</h2>
          </Col>
          <Col sm={2}>
          <CDBBtn color="success" onClick={handleOpen} circle outline>Add New</CDBBtn>
          <Modal open={open} size={'xs'} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title><h3>Register New Product</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="frm_product">
            <div className="">
              <div className="form-group mt-2">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-group mt-2">
                <label>Quantity</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="form-group mt-2">
                <label>Buy Price</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="Enter Buy Price"
                />
              </div>
              <div className="form-group mt-2">
                <label>Sale Price</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="Enter Sale Price"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" style={{width:100,float:'right',marginLeft:255}}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
          </Col>
          
        </Row>
      <div className='content'>
        <Dtable/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Customer