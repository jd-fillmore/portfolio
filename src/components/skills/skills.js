import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

import "../skills/skills.scss"

const skills = [
  "React",
  "React Hooks",
  "JavaScript",
  "Styled Components",
  "Gatsby",
  "Sass",
  "Accessibility",
  "Adobe XD",
]

class Skills extends Component {
  render() {
    return (
      <div className="skills">
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
      </div>
    )
  }
}

export default Skills
