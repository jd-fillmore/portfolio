import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import bfeCalcIntroImage from "../images/bfe-calculator-intro.jpg"
import bfeCalcMobileImage from "../images/bfe-calculator-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const FF7 = () => (
  <Layout>
    <SEO
      title="Battlefield Loan Calculator"
      description="While working at BFE fulltime, I was tasked to build out a loan calculator application for their main website. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={bfeCalcIntroImage}
          altTag="BFE intro image"
          projectTitle="BF Equipment Loan Calculator"
          projectLink="https://jk1rj.csb.app/"
          projectDescription="While working fulltime at BF Equipment Rentals, upper management wanted to incorporate a loan calculator on certain product pages on their website. My role was to orchestrate the entire project. From what technologies to use, to the design, build, implementation and launch of the application. The colours and fonts represent that of the brand."
          techUsed="HTML5, CSS3, JavaScript"
          altTagSplit="ff7 split image"
          mobileImage={bfeCalcMobileImage}
          altTagMobile="ff7 mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default FF7
