import React, { Component } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import Container from "../container/container"
import Column from "../column/column"
import Section from "../section/section"

import "../project-detailed/project-detailed.scss"
import "../button/button.scss"

class ProjectDetailed extends Component {
  render() {
    return (
      <Section className="inner project-detailed">
        <Section className="intro">
          {/* Laptop Image */}
          <Container className="container">
            <Column className="column">
              <Link to="/">
                <p>Back home</p>
              </Link>
              <Fade>
                <img src={this.props.introImage} alt={this.props.altTag} />
              </Fade>
            </Column>
          </Container>
          {/* Title, Role, Tech, Site Link */}
          <Container className="container">
            <Column className="column flex">
              <h1>{this.props.projectTitle}</h1>
            </Column>
            <Column className="column second">
              <a
                href={this.props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Website</button>
              </a>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <h4>My Role</h4>
              <p>{this.props.projectDescription}</p>
            </Column>
            <Column className="column">
              <h4>Technologies Used</h4>
              <p>{this.props.techUsed}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.githubLink}
              >
                {this.props.githubText}
              </a>
            </Column>
          </Container>
          {/* Split Image */}
          <Container className="container">
            <Column className="column">
              <Fade>
                <img src={this.props.splitImage} alt={this.props.altTagSplit} />
              </Fade>
            </Column>
          </Container>

          {/* Mobile Image */}
          <Container className="container">
            <Column className="column">
              <Fade>
                <img
                  src={this.props.mobileImage}
                  alt={this.props.altTagMobile}
                />
              </Fade>
            </Column>
          </Container>
          {/* Back */}
          <Container className="container back">
            <Column className="column">
              <Link to="/">
                <button>View More Work</button>
              </Link>
            </Column>
          </Container>
        </Section>
      </Section>
    )
  }
}

export default ProjectDetailed
