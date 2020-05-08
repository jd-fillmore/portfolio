import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAccessibleIcon,
  faSass,
  faReact,
  faSketch,
  faAdobe,
  faJs,
} from "@fortawesome/free-brands-svg-icons"

import "../skills/skills.scss"

class Skills extends Component {
  render() {
    const skills = {
      title: "Technical Skills",
      sass: "Sass",
      js: "JavaScript",
      react: "React",
      acc: "Accessibility",
      ps: "Adobe XD",
      sketch: "Sketch",
    }
    return (
      <div className="skills">
        <Container className="container">
          <Column className="column">
            <h2>{skills.title}</h2>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faReact} />
            <p>{skills.react}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faJs} />
            <p>{skills.js}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faSketch} />
            <p>{skills.sketch}</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faSass} />
            <p>{skills.sass}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faAccessibleIcon} />
            <p>{skills.acc}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faAdobe} />
            <p>{skills.ps}</p>
          </Column>
        </Container>
      </div>
    )
  }
}

export default Skills
