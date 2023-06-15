import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import axios from 'axios';

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleDelete = async (pro_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete Product?');
    if (confirmDelete) {
    try {
      await axios.delete(`http://127.0.0.1:8000/products/delete/${pro_id}/`);
      console.log('Product deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error(error);
      // Handle deletion error
    }
  }
  };

  return (
    <CDBContainer>
      <CDBTable striped>
        <CDBTableHeader>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Sale Price</th>
            <th >Action</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
        {products.length > 0 ? (
          products.map(product => (
            <tr key={product.pro_id}>
              <td>{product.pro_name}</td>
              <td>{product.quantity}</td>
              <td>{product.buy_price}</td>
              <td>{product.sale_price}</td>
              <td>
                <button onClick={/*e => </td>handleSubmit(product.pro_id)*/ product.pro_id} className='btn btn-sm btn-success ms-1 btn-succes'>Edit</button>
                <button onClick={() => handleDelete(product.pro_id)} className='btn btn-sm btn-danger ms-1 btn-succes'>Delete</button>
              </td>
            </tr>
          ))
          ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )
          }
        </CDBTableBody>
      </CDBTable>
    </CDBContainer>
  );
};
export default ProductList;