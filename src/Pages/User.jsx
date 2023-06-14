import React, { useState }from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import { CDBBtn, CDBContainer } from "cdbreact";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import UserList from '../Components/userlist';
import axios from 'axios';

export default function User() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //insert properties
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [privilege, setPrivilege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      first_name: fname,
      last_name: lname,
      email: email,
      username: username,
      password: password,
      privilege: privilege,
    };

    axios.post('http://127.0.0.1:8000/users/create/', userData)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });

    // Reset the form after submitting
    setFname('');setLname('');setEmail('');setUsername('');setPassword('');setPrivilege('');
  };
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
          <form onSubmit={handleSubmit} className="frm_product">
            <div className="">
              <div className="form-group mt-2">
                <label>First Name</label>
                <input
                  type="text"
                  value={fname} 
                  onChange={(e) => setFname(e.target.value)}
                  required
                  className="form-control mt-1"
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group mt-2">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lname} 
                  onChange={(e) => setLname(e.target.value)}
                  required
                  className="form-control mt-1"
                  placeholder="Enter last name"
                />
              </div>
              <div className="form-group mt-2">
                <label>Email</label>
                <input
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-2">
                <label>Username</label>
                <input
                  type="text"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-control mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-2">
                <label>Password</label>
                <input
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group mt-2">
                <label>Privilage</label>
                <select className="form-control mt-1" value={privilege} onChange={(e) => setPrivilege(e.target.value)}>
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
        {/* <Dtable/> */}
        <UserList/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}
