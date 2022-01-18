import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Container from "../container/container"
import Column from "../column/column"

import "../skills/skills.scss"

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "Sass",
  "Accessibility",
  "Figma",
]

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Fade delay={300}>
          <Container className="container">
            <Column className="column">
              <h4>{this.props.title}</h4>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <ul>
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Column>
          </Container>
        </Fade>
      </div>
    )
  }
}

export default Skills
