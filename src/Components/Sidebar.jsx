import React from 'react';
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { useState } from 'react';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div style={{ width: 250, }}>
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body className='Sidebar'>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" href='/dashboard' icon={<DashboardIcon />}> Dashboard</Nav.Item>
            <Nav.Item eventKey="2-1" href='/user' icon={<GroupIcon />}>User</Nav.Item>
            <Nav.Item eventKey="2-2" href='/product' icon={<GroupIcon />}>Product</Nav.Item>
            <Nav.Item eventKey="2-3" href='/customer' icon={<GroupIcon />}>Customer</Nav.Item>
            <Nav.Item eventKey="2-4" href='/sale' icon={<GroupIcon />}>Sale</Nav.Item>
            <Nav.Item  href='/report'icon={<GroupIcon />}>Report</Nav.Item>
            <Nav.Menu  eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1" icon={<GroupIcon />}>Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default Sidebar;