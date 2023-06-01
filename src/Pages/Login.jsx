import React from 'react'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom';

const Login3 = (props) => {
  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <center><img alt='logo' src={logo} style={{width: 200,}}/></center>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" href="/Dashboard" className="btn btn-primary">
          <NavLink exact to="/Dashboard" style={{color:"white",textDecoration:'none'}} activeClassName="activeClicked">
              LOGIN
            </NavLink>
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div>
  )
}

export default Login3