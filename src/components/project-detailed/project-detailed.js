import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "../container/container"
import Column from "../column/column"
import Section from "../section/section"

import AOS from "aos"
import "aos/dist/aos.css"

import "../project-detailed/project-detailed.scss"

class ProjectDetailed extends Component {
  componentDidMount() {
    AOS.init({})
  }
  render() {
    return (
      <Section className="inner project-detailed">
        <Section className="intro">
          {/* Laptop Image */}
          <Container className="container">
            <Column className="column">
              <img
                data-aos="fade-up"
                data-aos-duration="800"
                src={this.props.introImage}
                alt={this.props.altTag}
              />
            </Column>
          </Container>
          {/* Title, Role, Tech, Site Link */}
          <Container className="container">
            <Column className="column flex">
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {this.props.projectTitle}
              </h1>
            </Column>
            <Column className="column second">
              <a
                href={this.props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  View Website
                </button>
              </a>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <h4
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                My Role
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {this.props.projectDescription}
              </p>
            </Column>
            <Column className="column">
              <h4
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                Technologies Used
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                {this.props.techUsed}
              </p>
            </Column>
          </Container>
          {/* Split Image */}
          <Container className="container">
            <Column className="column">
              <img
                data-aos="fade-up"
                data-aos-duration="800"
                src={this.props.splitImage}
                alt={this.props.altTagSplit}
              />
            </Column>
          </Container>
          {/* Mobile Image */}
          <Container className="container">
            <Column className="column">
              <img
                data-aos="fade-up"
                data-aos-duration="800"
                src={this.props.mobileImage}
                alt={this.props.altTagMobile}
              />
            </Column>
          </Container>
          {/* Back */}
          <Container className="container back">
            <Column className="column">
              <Link to="/">
                <button data-aos="fade-up" data-aos-duration="800">
                  View More Work
                </button>
              </Link>
            </Column>
          </Container>
        </Section>
      </Section>
    )
  }
}

export default ProjectDetailed
