import React, { Component } from "react";
import { Navbar,NavDropdown,MenuItem,NavItem, Nav } from 'react-bootstrap';


class Banner extends Component {

  render() {
    return (
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">GoPickUp</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Quienes Somos
    </NavItem>
          <NavItem eventKey={2} href="#">
            Trabaja Con Nosotros
    </NavItem>
          <NavDropdown eventKey={3} title="Mas" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Banner;
