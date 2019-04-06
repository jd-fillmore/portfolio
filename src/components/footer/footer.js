import React, { Component } from "react"

import "../footer/footer.scss"
import Container from "../container/container"
import Column from "../column/column"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className="container">
          <Column className="column">
            <h4>Let's Connect</h4>
            <p>Feel free to reach out to me with project ideas or just a friendly hello.</p>
            <a href="mailto:jd@jdfill.me">jd@jdfill.me</a>
            <p>
              © {new Date().getFullYear()} | Built with Gatsby + React + Flexbox
            </p>
            <a
              href="https://github.com/jd-fillmore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jdfillmore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.behance.net/jdfillmore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="mailto:jd@jdfill.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Column>
        </Container>
      </footer>
    )
  }
}

export default Footer
