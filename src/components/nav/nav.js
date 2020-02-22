import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"
import Resume from "../../JD-Fillmore.pdf"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const navItems = {
  linkOne: "Work",
  linkTwo: "Resume",
  linkThree: "Contact",
}

const Nav = () => (
  <nav>
    <Container className="container">
      <Column className="column">
        <Link className="logo" to="/">
          <p class="logo">JD Fillmore</p>
        </Link>
      </Column>
      <Column className="column right">
        <Link to="/">{navItems.linkOne}</Link>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          {navItems.linkTwo}
        </a>
        <Link to="/contact">{navItems.linkThree}</Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
