import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import bfeUsedIntroImage from "../images/bfe-used-intro.jpg"
import bfeUsedSplitImage from "../images/bfe-split.jpg"
import bfeUsedMobileImage from "../images/bfe-intro-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const BFE = () => (
  <Layout>
    <SEO
      title="Battlefield Used Equipment Web App"
      description="While working at BFE fulltime, I was tasked to maintain and add new features to the used equipment web app. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={bfeUsedIntroImage}
          altTag="BFE intro image"
          projectTitle="BF Equipment Used Equipment"
          projectLink="https://used.battlefieldequipment.ca/"
          projectDescription="While working fulltime at BF Equipment Rentals, upper management wanted to incorporate a loan calculator on certain product pages on their website. My role was to orchestrate the entire project. From what technologies to use, to the design, build, implementation and launch of the application. The colours and fonts represent that of the brand."
          techUsed="JavaScript, Node, Sass, HTML5."
          splitImage={bfeUsedSplitImage}
          altTagSplit="BFE split image"
          mobileImage={bfeUsedMobileImage}
          altTagMobile="BFE mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default BFE
