import React from "react";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';



export default class Navigation extends React.Component{
	render(){
		return (
			<div>
			<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Matti Järvensivu</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="Topbar">
        <NavDropdown eventKey={3} title="Töitä" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Java</MenuItem>
          <MenuItem eventKey={3.2}>Php</MenuItem>
          <MenuItem eventKey={3.3}>C#</MenuItem>
          <MenuItem eventKey={3.4}>Android</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3} href="https://github.com/mattijarvensivu">Lisää Githubissa</MenuItem>
        </NavDropdown>
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>
		
       
			</div>
			);
	}
}