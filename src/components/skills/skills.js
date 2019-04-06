import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faVuejs,
  faGit,
  faBootstrap,
  faSketch,
  faAdobe,
  faGithub,
  faNode,
  faNpm,
} from "@fortawesome/free-brands-svg-icons"

import "../skills/skills.scss"

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Container className="container">
          <Column className="column">
            <h2>Technical Skills</h2>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon icon={faHtml5} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faCss3} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faSass} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faJs} />
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon icon={faWordpress} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faReact} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faVuejs} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faGit} />
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon icon={faBootstrap} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faSketch} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faAdobe} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faGithub} />
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon icon={faNode} />
          </Column>
          <Column className="column">
            <FontAwesomeIcon icon={faNpm} />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Skills
