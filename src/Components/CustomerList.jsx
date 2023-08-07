import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/customers/')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (customer_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete Customer?');
    if (confirmDelete) {
    try {
      await axios.delete(`http://127.0.0.1:8000/customers/delete/${customer_id}/`);
      console.log('Customer deleted successfully');
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {customers.length > 0 ? (
            customers.map(customer => (
            <tr key={customer.customer_id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.address}</td>
              <td>{customer.mobile}</td>
              <td>
                <button onClick={/*e => </td>handleSubmit(customer.customer_id)*/ console.log('Comming soon')} className='btn btn-sm btn-success ms-1 btn-succes'>Edit</button>
                <button onClick={/*e => </td>handleSubmit(customer.customer_id)*/ console.log('Comming soon')} className='btn btn-sm btn-info ms-1 btn-succes'>Loan Products Info</button>
                <button onClick={() => handleDelete(customer.customer_id)} className='btn btn-sm btn-danger ms-1 btn-succes'>Delete</button>
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
export default CustomerList;