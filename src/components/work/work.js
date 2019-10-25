import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"
import Button from "../button/button"

import ff7 from "../../images/ff7.jpg"
import infused from "../../images/infused.jpg"
import tims from "../../images/tims.jpg"
import portfolio from "../../images/port.jpg"
import cardon from "../../images/cardon.jpg"
import hps from "../../images/hps.jpg"
import cma from "../../images/cma.jpg"
import mcAesthetics from "../../images/mc.jpg"

import "../work/work.scss"

class Work extends Component {
  render() {
    return (
      <>
        <section className="work">
          <Container className="container">
            <Column className="column">
              <h3>Featured Client Projects</h3>
              <p>
                Utilizing ReactJS, Gatsby, HTML5, CSS3, JavaScript, WordPress
                and more
              </p>
            </Column>
          </Container>
          {/* Row 1 */}
          <Container className="container">
            <Column className="column">
              <ProjectOverview
                image={tims}
                altTag="Tim's"
                heading="Tim Hortons"
                description="HTML5, CSS3, Sass and JavaScript"
                linkText="View Project"
                link="/tims"
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
                image={hps}
                altTag="Hammond"
                heading="Hammond Power"
                description="HTML5, CSS3, Sass and JavaScript on SiteCore"
                linkText="View Project"
                link="/hps"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={cma}
                altTag="CMA"
                heading="CMA Mortgages"
                description="Custom WordPress build, HTML5, Sass and JavaScript"
                linkText="View Project"
                link="/cma"
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
                description="Custom WordPress build, HTML5, Sass and JavaScript"
                linkText="View Project"
                link="/cardon"
              />
            </Column>
            <Column className="column">&nbsp;</Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <h3>Self-Learning Web Development</h3>
              <p>
                Utilizing ReactJS, Gatsby, VueJS, HTML5, CSS3 and JavaScript
              </p>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column flex">
              <ProjectOverview
                image={ff7}
                altTag="FF7 Stats App"
                heading="Final Fantasy Stats"
                description="JavaScript and React-based web application"
                linkText="View Project"
                link="/ff7"
              />
            </Column>
            <Column className="column flex">
              <ProjectOverview
                image={infused}
                altTag="Infused Agency"
                heading="Infused Agency"
                description="Static site on VueJS, JavaScript and Gridsome"
                linkText="View Project"
                link="/infused"
              />
            </Column>
            <Column className="column flex">
              <ProjectOverview
                image={portfolio}
                altTag="Portfolio"
                heading="Portfolio"
                description="Static generated site on React, Gatsby and JavaScript"
                linkText="View Project"
                link="/portfolio"
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
