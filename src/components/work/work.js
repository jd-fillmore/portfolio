import React, { Component } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"
import Button from "../button/button"

import ff7 from "../../images/ff7.jpg"
import alc from "../../images/alc.jpg"
import tims from "../../images/tims.jpg"
import cardon from "../../images/cardon.jpg"
import hps from "../../images/hps.jpg"
import cma from "../../images/cma.jpg"
import mcAesthetics from "../../images/mc.jpg"
import reactMovie from "../../images/react-movie-api.jpg"
import cassabella from "../../images/cassabella.jpg"

import "../work/work.scss"

class Work extends Component {
  componentDidMount() {
    AOS.init({})
  }
  render() {
    return (
      <>
        <section className="work">
          <Container className="container text-center">
            <Column className="column">
              <h2>Featured Work</h2>
            </Column>
          </Container>
          {/* Row 1 */}
          <Container className="container">
            <Column className="column">
              <ProjectOverview
                image={tims}
                altTag="Tim's"
                heading="Tim Hortons"
                description="HTML5, CSS3, Sass, JavaScript"
                linkText="View Project"
                link="/tims"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={cassabella}
                altTag="Cass-A-Bella Construction"
                heading="Cass-A-Bella Construction"
                description="ReactJS, Gatsby, JavaScript, HTML5, CSS3, Sass"
                linkText="View Project"
                link="/cassabella-construction"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={mcAesthetics}
                altTag="MC Aesthetics"
                heading="MC Aesthetics"
                description="ReactJS, Gatsby, JavaScript, HTML5, CSS3, Sass"
                linkText="View Project"
                link="/mc-aesthetics"
              />
            </Column>
          </Container>

          {/* Row 2 */}
          <Container className="container two">
            <Column className="column">
              <ProjectOverview
                image={reactMovie}
                altTag="React MovieDB Api"
                heading="Movie Database API"
                description="ReactJS, HTML5, CSS3, JavaScript, Axios, REST API"
                linkText="View Project"
                link="/react-movie-api"
              />
            </Column>
            <Column className="column flex">
              <ProjectOverview
                image={alc}
                altTag="ALC Interiors"
                heading="ALC Interiors"
                description="ReactJS, Gatsby, JavaScript, HTML5, CSS3, Sass"
                linkText="View Project"
                link="/alc-interiors"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={ff7}
                altTag="FF7 Stats App"
                heading="Final Fantasy Stats"
                description="ReactJS, JavaScript, HTML5, CSS3, Sass, JSON"
                linkText="View Project"
                link="/ff7"
              />
            </Column>
          </Container>
          {/* Row 3 */}
          <Container className="container two">
            <Column className="column">
              <ProjectOverview
                image={cardon}
                altTag="Cardon"
                heading="Cardon Rehab"
                description="HTML5, CSS3, Sass, JavaScript"
                linkText="View Project"
                link="/cardon"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={hps}
                altTag="Hammond"
                heading="Hammond Power"
                description="HTML5, CSS3, Sass, JavaScript"
                linkText="View Project"
                link="/hps"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={cma}
                altTag="CMA"
                heading="CMA Mortgages"
                description="HTML5, CSS3, Sass, JavaScript"
                linkText="View Project"
                link="/cma"
              />
            </Column>
          </Container>
          <Container className="container">
            <Column className="column work-row">
              <a
                href="https://www.behance.net/jdfillmore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="work-btn">View More Work</Button>
              </a>
            </Column>
          </Container>
        </section>
      </>
    )
  }
}

export default Work
