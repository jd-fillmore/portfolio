import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Container from "../container/container"
import Column from "../column/column"
import Resume from "../../JD-Fillmore.pdf"

import "../hero/hero.scss"

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Container className="container">
          <Column className="column first">
            <Fade>
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                Resume
              </a>
              <span>/</span>
              <a
                href="https://github.com/jd-fillmore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                Github
              </a>
              <span>/</span>
              <a
                href="https://www.linkedin.com/in/jd-fillmore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href="mailto:jdfillmore.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                E-mail
              </a>
            </Fade>
          </Column>
        </Container>
      </section>
    )
  }
}

export default Hero
