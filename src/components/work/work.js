import React, { Component } from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"

import bfeUsed from "../../images/bfe-used.jpg"
import bfe from "../../images/freelance-web-designer-niagara.jpg"
import leafs from "../../images/freelance-web-developer-niagara.jpg"
import ff7 from "../../images/ff7.jpg"
import cardon from "../../images/cardon.jpg"
import hps from "../../images/hps.jpg"
import cma from "../../images/cma.jpg"
import mcAesthetics from "../../images/mc.jpg"
import reactMovie from "../../images/freelance-seo-niagara.jpg"
import cassabella from "../../images/cassabella.jpg"
import kd from "../../images/kd.jpg"

import "../work/work.scss"

class Work extends Component {
  render() {
    return (
      <>
        <section className="work">
          <Container className="container text-center">
            <Column className="column">
              <h2>Web Applications</h2>
            </Column>
          </Container>
          {/* Row 1 */}

          <Container className="container">
            <Column className="column">
              <ProjectOverview
                image={bfeUsed}
                altTag="BFE Used Equipment"
                heading="BFE Used Equipment"
                description="React, TypeScript, JavaScript, SCSS, REST API"
                linkText="View Project"
                link="/bf-used"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={bfe}
                altTag="BFE Loan Calculator"
                heading="BFE Loan Calculator"
                description="JavaScript, Sass, HTML5"
                linkText="View Project"
                link="/bf-calculator"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={leafs}
                altTag="Maple Leafs Stats"
                heading="Maple Leafs Stats"
                description="Adobe XD, React, React Hooks, Styled Components, JavaScript, Node, Axios, REST API, Sass"
                linkText="View Project"
                link="/maple-leafs"
              />
            </Column>
          </Container>
          <Container className="container two">
            <Column className="column">
              <ProjectOverview
                image={reactMovie}
                altTag="Movie Database"
                heading="Movie Database"
                description="Adobe XD, React, JavaScript, Node, Axios, REST API, Sass"
                linkText="View Project"
                link="/react-movie-api"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={ff7}
                altTag="FF7 Stats App"
                heading="Final Fantasy Stats"
                description="Adobe XD, React, JavaScript, Node, Sass, JSON"
                linkText="View Project"
                link="/ff7"
              />
            </Column>
            <Column className="column">&nbsp;</Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <h2>Websites</h2>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <ProjectOverview
                image={kd}
                altTag="KD Flowers"
                heading="KD Flowers"
                description="Adobe XD, React, Gatsby, JavaScript, Node, Sass"
                linkText="View Project"
                link="/kd-flowers"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={cassabella}
                altTag="Cass-A-Bella Construction"
                heading="Cass-A-Bella Construction"
                description="Adobe XD, React, Gatsby, JavaScript, Node, Sass"
                linkText="View Project"
                link="/cassabella-construction"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={hps}
                altTag="Hammond"
                heading="Hammond Power"
                description="Adobe XD, JavaScript, Node, Sass, HTML5"
                linkText="View Project"
                link="/hps"
              />
            </Column>
          </Container>

          {/* Row 2 */}
          <Container className="container two">
            <Column className="column">
              <ProjectOverview
                image={cma}
                altTag="CMA"
                heading="CMA Mortgages"
                description="Adobe XD, JavaScript, Node, Sass, HTML5"
                linkText="View Project"
                link="/cma"
              />
            </Column>
            <Column className="column">
              <ProjectOverview
                image={cardon}
                altTag="Cardon"
                heading="Cardon Rehab"
                description="Adobe XD, JavaScript, Node, Sass, HTML5"
                linkText="View Project"
                link="/cardon"
              />
            </Column>
            <Column className="column">&nbsp;</Column>
          </Container>
        </section>
      </>
    )
  }
}

export default Work
