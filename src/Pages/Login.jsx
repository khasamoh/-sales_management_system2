import React,{ useState } from 'react'
import logo from '../logo.png'
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login3 = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Send login request to Django API
  //   fetch('http://127.0.0.1:8000/login/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle response data
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://127.0.0.1:8000/login/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data); // Log the response data for debugging
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };
  
  

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:8000/login/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({username, password})
  //   });
  //   const data = await response.json();
  //   console.log(data); // Check the response data in the console
  //   setMessage(data.message);
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.post('http://localhost:8000/login/', {
  //     username, password});
  //     // eslint-disable-next-line no-undef
  //     if(is_verified === true){
  //       if(response.data.message === 'Valid login'){
  //         Navigate('/Dashboard')
  //       }
  //     }else{
  //       console.log('Invalid user')
  //     }
      
  //   const data = await response.json();
  //   console.log(data); // Check the response data in the console
   
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username,
        password,
      });
  
      const responseData = response.data;
      if (responseData.message === 'Valid login') {
        Navigate('/Dashboard');
      } else {
        console.log('Invalid user');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="Auth-form-container">
    <form onSubmit={handleLogin}>
      <div className="Auth-form-content">
        <center><img alt='logo' src={logo} style={{width: 200,}}/></center>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text" value={username} onChange={handleUsernameChange}
            className="form-control mt-1"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password" value={password} onChange={handlePasswordChange}
            className="form-control mt-1"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" href="/Dashboard" className="btn btn-primary">
          {/* <NavLink exact to="/Dashboard" style={{color:"white",textDecoration:'none'}} activeClassName="activeClicked">
              LOGIN
            </NavLink> */}
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div>
  )
};

export default Login3