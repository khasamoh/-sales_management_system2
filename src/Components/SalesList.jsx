import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import axios from 'axios';

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/sales/')
      .then(response => {
        setSales(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  const handleDelete = async (sales_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete Sale?');
    if (confirmDelete) {
    try {
      await axios.delete(`http://127.0.0.1:8000/sales/delete/${sales_id}/`);
      console.log('Sale deleted successfully');
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
            <th>Total Amount</th>
            <th >Action</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
        {sales.length > 0 ? (
            sales.map(sale => (
            <tr key={sale.sales_id}>
              <td>{sale.product +" To Do"}</td>
              <td>{sale.quantity}</td>
              <td>{'To Do'}</td>
              <td>
                <button onClick={/*e => </td>handleSubmit(sale.sales_id)*/ sale.sales_id} className='btn btn-sm btn-success ms-1 btn-succes'>Edit</button>
                <button onClick={() => handleDelete(sale.sales_id)} className='btn btn-sm btn-danger ms-1 btn-succes'>Delete</button>
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
export default SalesList;