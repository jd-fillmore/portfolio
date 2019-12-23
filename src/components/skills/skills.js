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
    const skills = {
      title: "Technical Skills",
      html: "HTML5",
      css: "CSS3 / Flexbox",
      sass: "Sass",
      js: "JavaScript",
      git: "Git / Github",
      bs: "Bootstrap",
      react: "React / GatsbyJS",
      acc: "Accessibility",
      ps: "Photoshop",
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
            <FontAwesomeIcon aria icon={faHtml5} />
            <p>{skills.html}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faCss3} />
            <p>{skills.css}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faSass} />
            <p>{skills.sass}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faJs} />
            <p>{skills.js}</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faGithub} />
            <p>{skills.git}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faBootstrap} />
            <p>{skills.bs}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faReact} />
            <p>{skills.react}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faAccessibleIcon} />
            <p>{skills.acc}</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <FontAwesomeIcon aria icon={faAdobe} />
            <p>{skills.ps}</p>
          </Column>
          <Column className="column">
            <FontAwesomeIcon aria icon={faSketch} />
            <p>{skills.sketch}</p>
          </Column>
          <Column className="column">&nbsp;</Column>
          <Column className="column">&nbsp;</Column>
        </Container>
      </div>
    )
  }
}

export default Skills
