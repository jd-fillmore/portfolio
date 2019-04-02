import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

import "../hero/hero.scss"

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Container>
          <Column>
            <h1>{this.props.title}</h1>
          </Column>
          <Column>
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.description}</p>
          </Column>
        </Container>
      </section>
    )
  }
}

export default Hero
