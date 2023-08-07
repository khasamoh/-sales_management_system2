import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import axios from 'axios';

const TodaySalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/todaysales/');
      const data = response.data;
      setSales(data.sold_data);
    } catch (error) {
      console.error(error);
    }
  };
  
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
            <th>Profit</th>
            <th >Action</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
        {sales.length > 0 ? (
            sales.map(sale => (
            <tr key={sale.sales_id}>
              <td>{sale.pro_name}</td>
              <td>{sale.quantity}</td>
              <td>{(sale.quantity)*(sale.sale_price)}</td>
              <td>{((sale.sale_price)-(sale.buy_price))*(sale.quantity)}</td>
              <td>
                <button onClick={/*e => </td>handleSubmit(sale.sales_id)*/ console.log('Comming soon')} className='btn btn-sm btn-success ms-1 btn-succes'>Edit</button>
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
export default TodaySalesList;