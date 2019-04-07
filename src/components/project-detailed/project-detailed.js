import React, { Component } from 'react';
// import { Link } from "gatsby"
import Container from "../container/container"
import Column from "../column/column"
import Section from "../section/section"

import "../project-detailed/project-detailed.scss"

class ProjectDetailed extends Component {
  render() {
    return (
      <Section className="inner project-detailed">
        <Section className="intro">
          {/* Laptop Image */}
          <Container className="container">
            <Column className="column">
              {/* <img src={this.props.responsive-image} alt={this.props.altTag}/> */}
              <img src="" alt="laptop image"/>
            </Column>
          </Container>
          {/* Title, Role, Tech, Site Link */}
          <Container className="container">
            <Column className="column">
              <h1>Cardon Rehab</h1>
            </Column>
            <Column className="column">
              <h1>link to site</h1>
            </Column>
          </Container>
        </Section>
      </Section>
    );
  }
}

export default ProjectDetailed;