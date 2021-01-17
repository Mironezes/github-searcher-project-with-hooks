import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Navbar.Brand ><Link to="/" className="nav-link">GitHub Searcher Project</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink  to="/" exact className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">Information</NavLink>
    </Nav>
  </Navbar>
)