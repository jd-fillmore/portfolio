import { Link } from "gatsby"
import React from "react"
import Container from "../container/container"
import Column from "../column/column"

import "../variables.scss"
import "../base.scss"
import "../nav/nav.scss"

const Nav = () => (
  <nav>
    <Container className="container">
      <Column className="column">
        <Link className="logo" to="/">
          <p className="logo">JD</p>
        </Link>
      </Column>
    </Container>
  </nav>
)

export default Nav
