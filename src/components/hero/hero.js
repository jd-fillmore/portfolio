import React, { Component } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Container from "../container/container"
import Column from "../column/column"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons"

import "../hero/hero.scss"

class Hero extends Component {
  componentDidMount() {
    AOS.init({})
  }

  render() {
    return (
      <section className="hero">
        <Container className="container">
          <Column className="column first">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <a
              href="https://github.com/jd-fillmore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon aria icon={faGithub} width="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/jarryd-douglas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} width="25" />
            </a>
            <a
              href="https://www.behance.net/jdfillmore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="behance"
            >
              <FontAwesomeIcon icon={faBehance} width="25" />
            </a>
            <a
              href="mailto:jd@jdfill.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email"
            >
              <FontAwesomeIcon icon={faEnvelope} width="25" />
            </a>
          </Column>
        </Container>
      </section>
    )
  }
}

export default Hero
