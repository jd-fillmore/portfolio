import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"

import bfeUsed from "../../images/bfe-used.jpg"
import bfe from "../../images/freelance-web-designer-niagara.jpg"
import leafs from "../../images/freelance-web-developer-niagara.jpg"
import hps from "../../images/hps.jpg"
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
              <Fade>
                <h2>Featured Web Applications</h2>
              </Fade>
            </Column>
          </Container>
          {/* Row 1 */}

          <Container className="container">
            <Column className="column">
              <Fade delay={200}>
                <ProjectOverview
                  image={bfeUsed}
                  altTag="BFE Used Equipment"
                  heading="BFE Used Equipment"
                  description="React, TypeScript, Sass, REST API"
                  linkText="View Project"
                  link="/bf-used"
                />
              </Fade>
            </Column>
            <Column className="column">
              <Fade delay={400}>
                <ProjectOverview
                  image={bfe}
                  altTag="BFE Loan Calculator"
                  heading="BFE Loan Calculator"
                  description="JavaScript, Sass, HTML5"
                  linkText="View Project"
                  link="/bf-calculator"
                />
              </Fade>
            </Column>
            <Column className="column">
              <Fade delay={600}>
                <ProjectOverview
                  image={leafs}
                  altTag="Maple Leafs Stats"
                  heading="Maple Leafs Stats"
                  description="React, Styled Components, JavaScript, Axios, REST API, Sass, Adobe XD"
                  linkText="View Project"
                  link="/maple-leafs"
                />
              </Fade>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <Fade>
                <h2>Featured Websites</h2>
              </Fade>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <Fade delay={200}>
                <ProjectOverview
                  image={kd}
                  altTag="KD Flowers"
                  heading="KD Flowers"
                  description="React, Gatsby, JavaScript, Sass, Adobe XD"
                  linkText="View Project"
                  link="/kd-flowers"
                />
              </Fade>
            </Column>
            <Column className="column">
              <Fade delay={400}>
                <ProjectOverview
                  image={cassabella}
                  altTag="Cass-A-Bella Construction"
                  heading="Cass-A-Bella Construction"
                  description="React, Gatsby, JavaScript, Sass, Adobe XD"
                  linkText="View Project"
                  link="/cassabella-construction"
                />
              </Fade>
            </Column>
            <Column className="column">
              <Fade delay={600}>
                <ProjectOverview
                  image={hps}
                  altTag="Hammond"
                  heading="Hammond Power"
                  description="JavaScript, HTML5, Sass, Adobe XD"
                  linkText="View Project"
                  link="/hps"
                />
              </Fade>
            </Column>
          </Container>

          {/* Row 2 */}
          {/* <Container className="container two">
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
          </Container> */}
        </section>
      </>
    )
  }
}

export default Work
