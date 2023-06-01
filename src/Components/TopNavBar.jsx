import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import GroupIcon from '@rsuite/icons/legacy/Group';
import logo from '../logo.png'

const TopNavBar = () => (
  <Navbar className='Navbar'>
    <Navbar.Brand href="#">
    <img alt='logo' src={logo}  style={{width:200,marginTop:-15,}}/>
    </Navbar.Brand>
    <Nav pullRight>
      <Nav.Menu icon={<GroupIcon />} title="Administrator">
        <Nav.Item>Profile</Nav.Item>
        <Nav.Item>Logout</Nav.Item>
    </Nav.Menu>
    </Nav>
    
  </Navbar>
);

export default TopNavBar;