import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"

import "../nav/nav.scss"

const Nav = () => (
  <nav>
    <Container>
      <Column>
        <Link to="/">JD Fillmore</Link>
      </Column>
      <Column className="right">
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
