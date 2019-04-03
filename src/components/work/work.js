import React from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"

import "../work/work.scss"

const Work = () => (
  <>
    <section className="work">
      <Container>
        <Column>
          <h2>Featured Work</h2>
          <h3>Side Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column>
          <ProjectOverview heading="Final Fantasy 7 Character Stats" description="HTML5, CSS3, Sketch, React, JavaScript, Flexbox, Netlify" linkText="View Project" link="/ff7"/>
        </Column>
        <Column>
          <ProjectOverview heading="Infused Agency" description="HTML5, CSS3, Sketch, Vue, Gridsome, JavaScript, Bootstrap 4, Netlify" linkText="View Project" link="/infused"/>
        </Column>
        <Column>
          <ProjectOverview heading="Portfolio" description="HTML5, CSS3, Sketch, React, Gatsby, JavaScript, Flexbox" linkText="View Project" link="/portfolio"/>
        </Column>
      </Container>
      <Container>
        <Column>
          <h3>Paid Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column>
          <ProjectOverview heading="Tim Hortons" description="HTML5, CSS3, Sketch, JavaScript, Foundation" linkText="View Project" link="/tims"/>
        </Column>
        <Column>
          <ProjectOverview heading="Cardon Rehab" description="HTML5, CSS3, Sketch, Custom WordPress Development, Foundation, JavaScript" linkText="View Project" link="/cardon"/>
        </Column>
        <Column>
          <ProjectOverview heading="Hammond Power" description="HTML5, CSS3, Sketch, Custom WordPress Development, Foundation, JavaScript" linkText="View Project" link="/local"/>
        </Column>
        <Column>
        <ProjectOverview heading="CMA Mortgages" description="HTML5, CSS3, Sketch, Custom WordPress Development, Bootstrap 4" linkText="View Project" link="/cma"/>
        </Column>
      </Container>
      <Container>
        <Column>
          <h3>(view all button to behance - update behance!)</h3>
        </Column>
      </Container>
    </section>
  </>
)

export default Work
