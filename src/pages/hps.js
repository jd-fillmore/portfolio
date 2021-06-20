import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import hpsIntroImage from "../images/hps-intro.jpg"
import hpsSplitImage from "../images/hps-split.jpg"
import hpsMobileImage from "../images/hps-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const HPS = () => (
  <Layout>
    <SEO
      title="HPS"
      description="I helped build out the front end of HPS' new website. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={hpsIntroImage}
          altTag="hps intro image"
          projectTitle="Hammond Power"
          projectLink="https://hammondpowersolutions.com"
          projectDescription="While employed by Thrillworks, Hammond Power requested for us to build them a modern website that allowed them to showcase their products to the world. My role was to lead the front-end initiatives, work agile within a team and lead from wireframes to development to launch."
          techUsed="Adobe XD, JavaScript, Node, SCSS, HTML5."
          splitImage={hpsSplitImage}
          altTagSplit="hps split image"
          mobileImage={hpsMobileImage}
          altTagMobile="hps mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default HPS
