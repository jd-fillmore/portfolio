import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import cardonIntroImage from "../images/cardon-intro.png"
import cardonSplitImage from "../images/cardon-split.jpg"
import cardonMobileImage from "../images/cardon-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Cardon = () => (
  <Layout>
    <SEO
      title="Cardon Rehab"
      description="I helped build out the front end of Cardon Rehab's new website. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={cardonIntroImage}
          altTag="cardon intro image"
          projectTitle="Cardon Rehab"
          projectLink="https://cardonrehab.com"
          projectDescription="While employed by Thrillworks, Cardon Rehab requested for us to build them a modern website based on WordPress that allowed them to showcase their products to the world."
          techUsed="HTML5, CSS3, Sass, JavaScript, NPM, Foundation, Photoshop, Sketch"
          splitImage={cardonSplitImage}
          altTagSplit="cardon split image"
          mobileImage={cardonMobileImage}
          altTagMobile="cardon mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Cardon
