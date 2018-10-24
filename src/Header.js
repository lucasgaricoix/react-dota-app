import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

const Header = () => {
  return (
  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Dota Statistic</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href='/'>Home
      </NavItem>
      <NavItem eventKey={2} href='/heroes'>Heroes
      </NavItem>     
    </Nav>
  </Navbar.Collapse>
  </Navbar>    
  )
}

export default Header