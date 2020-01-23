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
          projectDescription="While employed by Thrillworks, Tim Hortons requested for us to build them a micro-site showcasing true stories from their customers across Canada. My team and I worked Agile, having daily standups and updating the client for consistent feedback. I worked closely with the design team building out the front-end of the website, adding tweaks where necessary. The landing page itself was to be housed on a legacy platform, therefore pure HTML, CSS and JavaScript was the choice we made to move forward, due to time constraints and a straight-forward build."
          techUsed="HTML5, CSS3, Sass, NPM, Foundation, Photoshop, Sketch"
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
