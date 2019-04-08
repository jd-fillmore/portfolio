import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
import Image from "../../images/niagara-front-end-web-developer.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons"

import "../hero/hero.scss"

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Container className="container">
          <Column className="column">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <a
              href="https://github.com/jd-fillmore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon aria icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jdfillmore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.behance.net/jdfillmore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="behance"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="mailto:jd@jdfill.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Column>
          <Column className="column">
            <div className="second">
              <img src={Image} alt="Niagara Freelance Front End Web Developer"/>
            </div>
          </Column>
        </Container>
      </section>
    )
  }
}

export default Hero
