import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"
import logo from "../../images/logo.png"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const navItems = {
  linkOne: "Work",
  linkTwo: "About",
  linkThree: "Contact",
}

const Nav = () => (
  <nav>
    <Container className="container">
      <Column className="column">
        <Link to="/">
          <img src={logo} alt="JD Logo" />
        </Link>
      </Column>
      <Column className="column right">
        <Link to="/">{navItems.linkOne}</Link>
        <Link to="/about">{navItems.linkTwo}</Link>
        <Link to="/contact">{navItems.linkThree}</Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
