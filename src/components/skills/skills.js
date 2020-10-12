import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

import "../skills/skills.scss"

class Skills extends Component {
  render() {
    const props = this.props

    return (
      <div className="skills">
        <Container className="container">
          <Column className="column">
            <h4>{props.title}</h4>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <ul>
              {props.skills.map(skill => (
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
