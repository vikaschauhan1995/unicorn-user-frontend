import '../style/Navbar.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/Auth/action';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { faUser, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@mui/material/IconButton';
import { CART_LIST, HOME_REDUCER, PRODUCT_NAME } from '../redux/Home/constants';
import { removeProductFromCartAction } from '../redux/Home/action';

const profileToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div className="Navbar__tooltip_toggle_icon" onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>
    <IconButton size="small">
      <FontAwesomeIcon icon={faUser} />
    </IconButton>
  </div>
));
const cartToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div className="Navbar__tooltip_toggle_icon" onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>
    <IconButton size="small">
      <FontAwesomeIcon icon={faShoppingCart} />
    </IconButton>
  </div>
));
const Navbar_ = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const cartList = state?.[HOME_REDUCER]?.[CART_LIST];
  const cartListItems = cartList.map((item) => {
    return (
      <div key={item?._id} className="Navbar__tooltip_cart_item px-2 py-1">
        <div className="Navbar__tooltip_cart_item_left">{item?.[PRODUCT_NAME]}hi may name is vikas cahuhan;</div>
        <div className="Navbar__tooltip_cart_item_delete">
          <IconButton size="small" color="error" onClick={() => dispatch(removeProductFromCartAction(item))}>
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </div>
      </div>
    );
  });
  const cartItems = cartListItems?.length > 0 ? cartListItems : "No Items";
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="Navbar__innerContainer">
          <div className="Navbar__innerContainer_left">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link to="/" className="mx-3">Unicorn</Link>
          </div>
          <div className="Navbar__innerContainer_mid">
            <input type="text" className="Navbar_search" placeholder="Search" />
          </div>
          <div className="Navbar__innerContainer_right">
            <div>
              <Dropdown align="end">
                <Dropdown.Toggle as={cartToggle} id="dropdown-custom-components">
                  Custom toggle
                </Dropdown.Toggle>
                <div className="Navbar__tooltip_icon_num_batch custom-position">
                  <div className="Navbar__tooltip_icon_num">{cartList?.length}</div>
                </div>
                <Dropdown.Menu className="Navbar__tooltip_items cart">
                  {cartItems}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown align="end">
                <Dropdown.Toggle as={profileToggle} id="dropdown-custom-components">
                  Custom toggle
                </Dropdown.Toggle>
                <Dropdown.Menu className="Navbar__tooltip_items">
                  <Link to="/myorders"><div className="Navbar__tooltip_item px-2 py-1">My Orders</div></Link>
                  <Link onClick={() => dispatch(logoutAction())}><div className="Navbar__tooltip_item px-2 py-1">Logout</div></Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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