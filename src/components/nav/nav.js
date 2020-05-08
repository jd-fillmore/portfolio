import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"
import Resume from "../../JD-Fillmore.pdf"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const navItems = {
  linkOne: "Resume",
  linkTwo: "Contact",
}

const Nav = () => (
  <nav>
    <Container className="container">
      <Column className="column">
        <Link className="logo" to="/">
          <p className="logo">JD Fillmore</p>
        </Link>
      </Column>
      <Column className="column right">
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          {navItems.linkOne}
        </a>
        <Link to="/contact">{navItems.linkTwo}</Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
