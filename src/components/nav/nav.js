import { Link } from "gatsby"
import React from "react"
import Container from '../container/container'
import Column from '../column/column'

import '../nav/nav.scss';

const Nav = () => (
  <nav>
    <Container>
      <Column>
        <Link to="/">JD Fillmore</Link>
      </Column>
      <Column>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://github.com/jd-fillmore/" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/jdfillmore/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.behance.net/jdfillmore" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="mailto:jd@jdfill.me" target="_blank" rel="noopener noreferrer">Email</a> 
      </Column>
    </Container>
  </nav>
)

export default Nav