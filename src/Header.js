import React from 'react'
import { Navbar, NavItem, Nav, Button, FormControl, FormGroup } from 'react-bootstrap'

const Header = ({ onChangeSearchText, text, onLogin }) => {
  
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>Dota Statistic</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={1}>
          <NavItem href={`/heroes`}>Heroes </NavItem>
        </Nav>
       
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search Steam32 ID" value={text} onChange={onChangeSearchText}/>
          </FormGroup>          
            <a href={`/match/${text}`}><Button type="submit" onClick={onLogin}>My Profile</Button></a>
        </Navbar.Form>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header