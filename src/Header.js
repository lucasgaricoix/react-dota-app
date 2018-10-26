import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>Dota Statistic</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='/match'>Match </NavItem>
          <NavItem eventKey={2} href='/heroes'>Heroes </NavItem>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
