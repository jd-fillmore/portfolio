import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import cmaIntroImage from "../images/cma-intro.jpg"
import cmaSplitImage from "../images/cma-split.jpg"
import cmaMobileImage from "../images/cma-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const CMA = () => (
  <Layout>
    <SEO
      title="Cardon Rehab"
      description="I helped build out the front end of Cardon Rehab's new website. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={cmaIntroImage}
          altTag="cma intro image"
          projectTitle="Canadian Mortgage Authority"
          projectLink="https://canadianmortgageauthority.com"
          projectDescription="While employed by Thrillworks, cma Rehab requested for us to build them a modern website based on WordPress that allowed them to showcase their products to the world."
          techUsed="HTML5, CSS3, Sass, JavaScript, Custom WordPress Theme, NPM, Node, Foundation, Photoshop, Sketch"
          splitImage={cmaSplitImage}
          altTagSplit="cma split image"
          mobileImage={cmaMobileImage}
          altTagMobile="cma mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default CMA
