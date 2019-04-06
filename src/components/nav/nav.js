import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"
import logo from "../../images/logo.png"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const Nav = () => (
  <nav>
    {/* Mobile */}
    <section className="nav-mobile">
      <Container className="container">
        <Column className="column">
          <Link to="/"><img src={logo} alt="JD Fillmore Logo" /></Link>
        </Column>
        <Column className="column right">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Column>
      </Container>
    </section>
    {/* Desktop */}
    <section className="nav-desktop">
      <Container className="container">
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
    </section>
  </nav>
)

export default Nav
