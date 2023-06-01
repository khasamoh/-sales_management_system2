import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import logo from '../logo.png'
import { NavLink } from 'react-router-dom';

const Sidebar1 = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="rgba(6, 83, 97, 0.842)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            Menu
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" data-toggle='tooltip' data-placement='right' title='Dashboard'>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" data-toggle='tooltip' data-placement='right' title='User'>Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/product" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" data-toggle='tooltip' data-placement='right' title='Product'>Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" data-toggle='tooltip' data-placement='right' title='Customer'>Customer</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sale" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" data-toggle='tooltip' data-placement='right' title='Sales'>Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/report" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" data-toggle='tooltip' data-placement='right' title='Report'> Reports</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar1;