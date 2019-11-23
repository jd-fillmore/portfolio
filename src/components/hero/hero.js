import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
// import Image from "../../images/burlington-freelance-web-designer.jpg"

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
    const data = this.props.data.allMarkdownRemark.edges[0].node.frontmatter

    return (
      <section className="hero">
        <Container className="container">
          <Column className="column">
            <h1>{data.heroText}</h1>
            <p>{data.heroTitle}</p>
            <a
              href="https://github.com/jd-fillmore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon aria icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jarryd-douglas/"
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
              <img
                src={data.myImage}
                alt="Burlington Freelance Web Designer &amp; Developer"
              />
            </div>
          </Column>
        </Container>
      </section>
    )
  }
}

export default Hero
