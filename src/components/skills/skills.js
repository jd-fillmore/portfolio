import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faAccessibleIcon,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faReact,
  faSketch,
  faAdobe,
  faJs,
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
            <FontAwesomeIcon aria icon={faHtml5} />
            <p>HTML5</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faCss3} />
            <p>CSS3, Flexbox</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faSass} />
            <p>Sass</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faJs} />
            <p>JavaScript</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faGithub} />
            <p>Git, Github</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faBootstrap} />
            <p>Bootstrap</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faReact} />
            <p>React, GatsbyJS</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faAccessibleIcon} />
            <p>Accessibility</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faAdobe} />
            <p>Photoshop</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faSketch} />
            <p>Sketch</p>
          </Column>
          <Column className="column">&nbsp;</Column>
          <Column className="column">&nbsp;</Column>
        </Container>
      </div>
    )
  }
}

export default Skills
