import React, { useState }from 'react'
import TopNavBar from '../Components/TopNavBar'
import Sidebar1 from '../Components/Sidebar1'
import { Container, Row, Col } from 'react-bootstrap';
import { CDBBtn, CDBContainer } from "cdbreact";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import ProductList from '../Components/ProductList';
import axios from 'axios';

const Product = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //insert properties
  const [proName, setProName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      pro_name: proName,
      quantity: quantity,
      buy_price: buyPrice,
      sale_price: salePrice,
    };

    axios.post('http://127.0.0.1:8000/products/create/', productData)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });

    // Reset the form after submitting
    setProName('');setQuantity('');setBuyPrice('');setSalePrice('');
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
          <h2>List Of Products</h2>
          </Col>
          <Col sm={2} className='no-padding'>
          <CDBBtn color="success" onClick={handleOpen} circle outline>Add New</CDBBtn>
          </Col>
        </Row>
          <Modal open={open} size={'xs'} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title><h3>Register New Product</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="frm_product">
            <div className="">
              <div className="form-group mt-2">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  value={proName}
                  onChange={(e) => setProName(e.target.value)}
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div className="form-group mt-2">
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
              <div className="form-group mt-2">
                <label>Buy Price</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  placeholder="Enter Buy Price"
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label>Sale Price</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value)}
                  placeholder="Enter Sale Price"
                  required
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
          
      <div className='content no-padding'>
        <ProductList/>
      </div>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Product