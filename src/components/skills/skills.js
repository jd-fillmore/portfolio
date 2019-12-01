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
            <p>Flexbox</p>
          </Column>
          <Column className="column">
            <p>Bootstrap</p>
          </Column>
          <Column className="column">
            <p>React</p>
          </Column>
          <Column className="column">
            <p>GatsbyJS</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>JAMStack</p>
          </Column>
          <Column className="column">
            <p>Netlify</p>
          </Column>
          <Column className="column">
            <p>Git</p>
          </Column>
          <Column className="column">
            <p>NPM</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>Yarn</p>
          </Column>
          <Column className="column">
            <p>Gulp</p>
          </Column>
          <Column className="column">
            <p>Fetch API</p>
          </Column>
          <Column className="column">
            <p>AJAX</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>Axios</p>
          </Column>
          <Column className="column">
            <p>JSON</p>
          </Column>
          <Column className="column">
            <p>Photoshop</p>
          </Column>
          <Column className="column">
            <p>Sketch</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>InVision</p>
          </Column>
          <Column className="column">
            <p>Storybook</p>
          </Column>
          <Column className="column">
            <p>WordPress</p>
          </Column>
          <Column className="column">
            <p>Google Analytics</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <p>Google Tag Manager</p>
          </Column>
          <Column className="column">
            <p>SEO</p>
          </Column>
          <Column className="column">
            <p>Agile / Scrum</p>
          </Column>
          <Column className="column">
            <p>Continuous Deployment</p>
          </Column>
        </Container>
      </div>
    )
  }
}

export default Skills
