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
          projectDescription="While working fulltime at BF Equipment Rentals, upper management wanted to adjust an already-built Toromont CAT web application and customize it for our company. My role was to customize the look, as well as implement new features. Notably, company-specific product filtering and image categorization based on values from a REST API."
          techUsed="React, TypeScript, Sass, REST API"
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
