import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

import "../skills/skills.scss"

class Skills extends Component {
  render() {
    const skills = [
      "React",
      "React Hooks",
      "JavaScript",
      "TypeScript",
      "Styled Components",
      "Gatsby",
      "Sass",
      "Accessibility",
    ]
    return (
      <div className="skills">
        <Container className="container">
          <Column className="column">
            <h4>Recent Technology Stack</h4>
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
      </div>
    )
  }
}

export default Skills
