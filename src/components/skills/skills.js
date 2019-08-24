import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"

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
            <p>HTML5</p>
          </Column>
          <Column className="column">
            <p>CSS3</p>
          </Column>
          <Column className="column">
            <p>Sass</p>
          </Column>
          <Column className="column">
            <p>JavaScript</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>WordPress</p>
          </Column>
          <Column className="column">
            <p>ReactJS</p>
          </Column>
          <Column className="column">
            <p>VueJS</p>
          </Column>
          <Column className="column">
            <p>Git</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>Bootstrap</p>
          </Column>
          <Column className="column">
            <p>Sketch</p>
          </Column>
          <Column className="column">
            <p>Photoshop</p>
          </Column>
          <Column className="column">
            <p>Github</p>
          </Column>
        </Container>
       
      </div>
    )
  }
}

export default Skills
