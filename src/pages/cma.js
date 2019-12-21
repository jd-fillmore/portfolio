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
          projectDescription="Canadian Mortgage Authority contacted me for a website, as their then-current one was not optimized, lacked responsiveness and wasn't performing well sales-wise. With speed, performance and UX in mind, I designed and build a website for him that performs much better than the last."
          techUsed="HTML5, CSS3, Sass, JavaScript, NPM, Bootstrap, Photoshop, Sketch"
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
