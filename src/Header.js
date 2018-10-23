import React from 'react'
import { Navbar, NavItem, Button, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



const Header = () => {

      
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Dota Statistic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" >    
        <NavItem eventKey={1} componentClass='span'> 
          <NavLink exact className="nav-link" to="/">
            <Button bsStyle="primary" style={{marginRight: 10}}>Home</Button>
          </NavLink>
        </NavItem> 
        <NavItem eventKey={2} componentClass='span'>
          <NavLink exact className="nav-link" to="/heroes">
            <Button  bsStyle="primary" style={{marginRight: 10}}>Heroes</Button>
          </NavLink>
        </NavItem>      
      </Nav>          
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Header