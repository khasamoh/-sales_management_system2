import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import Dtable from '../Components/Dtable';
import { CDBBtn, CDBContainer } from "cdbreact";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

export default function User() {
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
          <Col sm={10} className='pad-head'>
          <h2>List Of Users</h2>
          </Col>
          <Col sm={2} className='no-padding'>
          <CDBBtn color="success" onClick={handleOpen} circle outline>Add New</CDBBtn>
          </Col>
        </Row>
          <Modal open={open} size={'xs'} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title><h3>Register New User</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="frm_product">
            <div className="">
              <div className="form-group mt-2">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group mt-2">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter last name"
                />
              </div>
              <div className="form-group mt-2">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-2">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-2">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group mt-2">
                <label>Privilage</label>
                <select className="form-control mt-1">
                  <option value={'Administrator'}>Administrator</option>
                  <option value={'Saller'}>Saller</option>
                </select>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" style={{width:100,float:'right',marginLeft:255}}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
          
      <div className='content no-padding'>
        <Dtable/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}
