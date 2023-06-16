import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleDelete = async (user_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete user?');
    if (confirmDelete) {
    try {
      await axios.delete(`http://127.0.0.1:8000/users/delete/${user_id}/`);
      console.log('User deleted successfully');
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
            <th>Email</th>
            <th>Username</th>
            <th>Privilage</th>
            <th>Action</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {users.length > 0 ? (
            users.map(user => (
            <tr key={user.user_id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.privilege}</td>
              <td>
                <button onClick={/*e => </td>handleSubmit(user.user_id)*/ user.user_id} className='btn btn-sm btn-success ms-1 btn-succes'>Edit</button>
                <button onClick={() => handleDelete(user.user_id)} className='btn btn-sm btn-danger ms-1 btn-succes'>Delete</button>
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
export default UserList;