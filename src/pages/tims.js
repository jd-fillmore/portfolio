import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import timsIntroImage from "../images/tims-every-cup.jpg"
import timsSplitImage from "../images/tims-split.jpg"
import timsMobileImage from "../images/tims-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Tims = () => (
  <Layout>
    <SEO
      title="Tim Hortons"
      description="I helped build out one of Tim Horton's campaigns, on the front end. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={timsIntroImage}
          altTag="tims every cup"
          projectTitle="Every Cup Tells A Story"
          projectLink="https://www.timhortons.com/ca/en/promos/every-cup-tells-a-story.php"
          projectDescription="While employed by Thrillworks, Tim Hortons requested for us to build them a micro-site showcasing true stories from their customers across Canada."
          techUsed="HTML5, CSS3, Sass, NPM, Node, Foundation, Photoshop, Sketch"
          splitImage={timsSplitImage}
          altTagSplit="tims every cup split image"
          mobileImage={timsMobileImage}
          altTagMobile="tims every cup mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Tims
