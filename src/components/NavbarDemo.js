import React, { Component } from 'react';
// import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
export class NavbarDemo extends Component {
  render() {
    return (
      <div>
        <Navbar className='light' color='light' light expand='md'>
          <NavbarToggler />
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarDemo;
