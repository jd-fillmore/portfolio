import React from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"

import ff7 from "../../images/ff7.jpg"
import infused from "../../images/infused.jpg"

import "../work/work.scss"

const Work = () => (
  <>
    <section className="work">
      <Container>
        <Column className="column">
          <h2>Featured Work</h2>
          <h3>Self-Learning Side Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column className="column">
          <ProjectOverview image={ff7} heading="Final Fantasy Stats" description="JavaScript and React-based web application" linkText="View Project" link="/ff7"/>
        </Column>
        <Column className="column">
          <ProjectOverview image={infused} heading="Infused Agency" description="Static generated site on VueJS, JavaScript and Gridsome" linkText="View Project" link="/infused"/>
        </Column>
        <Column className="column">
          <ProjectOverview heading="Portfolio" description="Static generated site on React, Gatsby and JavaScript" linkText="View Project" link="/portfolio"/>
        </Column>  
      </Container>
      <Container>
        <Column className="column">
          <h3>Paid Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column className="column">
          <ProjectOverview heading="Tim Hortons" description="Built with HTML5, CSS3, Sass and JavaScript" linkText="View Project" link="/tims"/>
        </Column>
        <Column className="column">
          <ProjectOverview heading="Cardon Rehab" description="Custom WordPress build, HTML5, Sass and JavaScript" linkText="View Project" link="/cardon"/>
        </Column>
        <Column className="column">
          <ProjectOverview heading="Hammond Power" description="HTML5, CSS3, Sass and JavaScript on SiteCore" linkText="View Project" link="/hammond"/>
        </Column>
        <Column className="column">
        <ProjectOverview heading="CMA Mortgages" description="Custom WordPress build, HTML5, Sass and JavaScript" linkText="View Project" link="/cma"/>
        </Column>
      </Container>
      <Container>
        <Column className="column">
          <h3>(view all button to behance - update behance!)</h3>
        </Column>
      </Container>
    </section>
  </>
)

export default Work
