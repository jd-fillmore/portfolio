import React from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"

const Work = () => (
  <>
    <section className="work">
      <Container>
        <Column>
          <h1>Featured Work</h1>
          <h3>Side Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column>
          <ProjectOverview heading="Final Fantasy 7 Character Stats" description="Sketch, React, JavaScript, Flexbox" linkText="View Project" link="/ff7"/>
        </Column>
        <Column>
          <ProjectOverview heading="Infused Agency" description="Sketch, Vue, Gridsome, Bootstrap 4" linkText="View Project" link="/infused"/>
        </Column>
        <Column>
          <ProjectOverview heading="Portfolio" description="Sketch, React, Gatsby, JavaScript, Flexbox" linkText="View Project" link="/portfolio"/>
        </Column>
      </Container>
      <Container>
        <Column>
          <h3>Paid Projects</h3>
        </Column>
      </Container>
      <Container>
        <Column>
          <ProjectOverview heading="Tim Hortons" description="Sketch, JavaScript, Foundation, Node, NPM" linkText="View Project" link="/tims"/>
        </Column>
        <Column>
          <ProjectOverview heading="Cardon Rehab" description="Sketch, Custom WordPress Development, Foundation, JavaScript, Node, NPM" linkText="View Project" link="/cardon"/>
        </Column>
        <Column>
          <ProjectOverview heading="Local793" description="Sketch, Custom WordPress Development, Foundation, JavaScript, Node, NPM" linkText="View Project" link="/local"/>
        </Column>
        <Column>
        <ProjectOverview heading="CMA Mortgages" description="Sketch, Custom WordPress Development, Bootstrap, Node, NPM" linkText="View Project" link="/cma"/>
        </Column>
      </Container>
      <Container>
        <Column>
          <ProjectOverview heading="Donna O'Brien Designs" description="Sketch, Custom WordPress Development, JavaScript, Bootstrap, Node, NPM" linkText="View Project" link="/donna"/>
        </Column>
        <Column>
          <ProjectOverview heading="MJ Dixon" description="Sketch, Custom WordPress Development, Foundation, JavaScript, Node, NPM" linkText="View Project" link="/mj"/>
        </Column>
        <Column>
          <ProjectOverview heading="Sanko Construction" description="Sketch, Custom WordPress Development, JavaScript, Bootstrap, Node, NPM" linkText="View Project" link="/sanko"/>
        </Column>
        <Column>
          <ProjectOverview heading="Chris Cutaia" description="Sketch, Custom WordPress Development, Foundation, JavaScript, Node, NPM" linkText="View Project" link="/chris"/>
        </Column>
      </Container>
    </section>
  </>
)

export default Work
