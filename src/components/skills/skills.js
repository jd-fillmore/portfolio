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
        <Container>
          <Column>
            <h2>Technical Skills</h2>
          </Column>
        </Container>
        <Container>
          <Column>
            <FontAwesomeIcon icon={faHtml5} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faCss3} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faSass} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faJs} />
          </Column>
        </Container>
        <Container>
          <Column>
            <FontAwesomeIcon icon={faWordpress} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faReact} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faVuejs} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faGit} />
          </Column>
        </Container>
        <Container>
          <Column>
            <FontAwesomeIcon icon={faBootstrap} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faSketch} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faAdobe} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faGithub} />
          </Column>
        </Container>
        <Container>
          <Column>
            <FontAwesomeIcon icon={faNode} />
          </Column>
          <Column>
            <FontAwesomeIcon icon={faNpm} />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Skills
