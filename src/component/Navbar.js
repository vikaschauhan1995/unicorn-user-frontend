import '../style/Navbar.scss';
import React from 'react';
import { useDispatch } from 'react-redux'
import { logoutAction } from '../redux/Auth/action';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>
    Profile
  </div>
));
const Navbar_ = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="Navbar__innerContainer">
          <div className="Navbar__innerContainer_left">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link to="/" className="mx-3">Unicorn</Link>
          </div>
          <div className="Navbar__innerContainer_mid">
            <input type="text" className="Navbar_search" placeholder="search" />
          </div>
          <div className="Navbar__innerContainer_right">
            <Dropdown align="end">
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Custom toggle
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div><Link to="/myorders">My Orders</Link></div>
                <div><Link onClick={() => dispatch(logoutAction())}>Logout</Link></div>
              </Dropdown.Menu>
            </Dropdown>
            {/* <DropdownButton
              // as={ButtonGroup}
              align="end"
            >
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Custom toggle
              </Dropdown.Toggle>
              <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
              <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
            </DropdownButton> */}
          </div>
        </Container>
      </Navbar>
      {/* <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Custom Order</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal> */}
      {/* <Link to="/">Unicorn</Link>
      <Link to="/myorders">My Orders</Link>
      <Link onClick={() => dispatch(logoutAction())}>Logout</Link>
      Navbar */}
    </div>
  )
}

export default Navbar_;