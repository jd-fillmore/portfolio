import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"
import logo from "../../images/logo.jpg"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const Nav = () => (
  <nav>
    <Container>
      <Column className="column">
        <Link to="/"><img src={logo} alt="JD Fillmore Logo" /></Link>
      </Column>
      <Column className="column right">
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/contact">Contact</Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
