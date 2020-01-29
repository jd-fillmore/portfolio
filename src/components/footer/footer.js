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
    const footerContent = {
      title: `Let's Connect`,
      description:
        "Feel free to reach out to me with project ideas or just a friendly hello.",
      email: "jd@jdfill.me",
      bottomDescription: "| Built with Gatsby + React",
    }
    return (
      <footer>
        <Container className="container">
          <Column className="column">
            <h4>{footerContent.title}</h4>
            <p>{footerContent.description}</p>
            <a href="mailto:jd@jdfill.me">{footerContent.email}</a>
            <p>
              © {new Date().getFullYear()} {footerContent.bottomDescription}
            </p>
            <a
              href="https://github.com/jd-fillmore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon icon={faGithub} width="20" />
            </a>
            <a
              href="https://www.linkedin.com/in/jarryd-douglas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} width="20" />
            </a>
            <a
              href="https://www.behance.net/jdfillmore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="behance"
            >
              <FontAwesomeIcon icon={faBehance} width="20" />
            </a>
            <a
              href="mailto:jd@jdfill.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email"
            >
              <FontAwesomeIcon icon={faEnvelope} width="20" />
            </a>
          </Column>
        </Container>
      </footer>
    )
  }
}

export default Footer
